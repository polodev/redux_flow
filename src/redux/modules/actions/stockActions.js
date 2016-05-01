import * as StockConstants from 'constants/StockConstants';
let constants = StockConstants.default;

import {genericWebAPICall} from 'utils/AppAPI';


function getStocks(requestObject) {
  console.log("requestObjectFor_getStocks", requestObject);
  return dispatch => {
    var url = 'transparencydonations/searchStocks/v1/',
    onSuccess = function (response) {
      if(response.cardsList.length>0){
        if(response.cardsList.length<9){
          var loadmorefortransparency = document.getElementById('loadmorefortransparency');
          if(loadmorefortransparency) {
            loadmorefortransparency.style.display = 'none';
          }

        }
        else{
          var loadmorefortransparency = document.getElementById('loadmorefortransparency');
          if(loadmorefortransparency) {
            loadmorefortransparency.style.display = 'block';
          }
        }
      }
      dispatch({
          type : constants.GET_STOCKS,
          stocks : response,
          stocksActiveCategory : requestObject.categoryId,
          isLoading : false
      });
    },
    onFailure = function (response) {
      console.log(response);
      dispatch({
          isLoading : false
      });
    };
    genericWebAPICall(url, requestObject, onSuccess, onFailure);
  }
}
function updateStocks(requestObject) {
  return dispatch => {
    var url = 'transparencydonations/searchStocks/v1/',
    onSuccess = function (response) {
      if(response.cardsList.length===0){
          document.getElementById('loadmorefortransparency').style.display = 'none';
          document.getElementById('loading-text').style.display = 'none';
          document.getElementById('loading-icon').style.display = 'none';
      }
      else if(response.cardsList.length<9){
          document.getElementById('loadmorefortransparency').style.display = 'none';
          document.getElementById('loading-text').style.display = 'none';
          document.getElementById('loading-icon').style.display = 'none';
      }
      else{
          document.getElementById('loadmorefortransparency').style.display = 'block';
          document.getElementById('loading-text').style.display = 'inline';
          document.getElementById('loading-icon').style.display = 'none';
      }
      dispatch({
          type : constants.UPDATE_STOCKS,
          stocks : response
      });
    },
    onFailure = function (response) {
      console.log(response);
    };
    genericWebAPICall(url, requestObject, onSuccess, onFailure);
  }
}
function getCategoryOfStocks(requestObjectFor_getStocks) {
  return dispatch => {
    var url = 'transparencydonations/getCategoryDetailsAPI/v1/',
    requestObject = {},
    onSuccess = function (response) {
      dispatch({
          type : constants.GET_CATEGORIES,
          stocksCategories : response,
          stocksActiveCategory : response[0]['categoryId']
      });
      if(requestObjectFor_getStocks !== undefined) {
        requestObjectFor_getStocks.categoryId = 10;
        getStocks(requestObjectFor_getStocks);
      }

    },
    onFailure = function (response) {
      console.log(response);
    };
    genericWebAPICall(url, requestObject, onSuccess, onFailure);
  }
}


function getSearchedStocks(requestObject) {
  return dispatch => {
    var url = 'transparencydonations/searchStocks/v1/',
    onSuccess = function (response) {
        if(response.cardsList.length<9){
          document.getElementById('loadmorefortransparency').style.display = 'none';
        } else{
          document.getElementById('loadmorefortransparency').style.display = 'block';
        }
        
      dispatch({
          type : constants.GET_SEARCHED_STOCKS,
          searchedStocks : response,
          isLoading : false,
          stocksActiveCategory : requestObject.categoryId

      });
    },
    onFailure = function (response) {
      console.log(response);
      dispatch({
          isLoading : false
      });
    };
    genericWebAPICall(url, requestObject, onSuccess, onFailure);
  }
}

/**
 *Following functions just set value to the global state. They are not performing any API call
 *
 */

function setStocksActiveCategoryAndIsLoading (stocksActiveCategory, isLoading) {
  return dispatch => {
    dispatch({
      type : constants.SET_ACTIVE_CATEGORY_AND_IS_LOADING,
      stocksActiveCategory : stocksActiveCategory,
      isLoading : isLoading || true
    });
  }
}

function changeFilterValue (value) {
  return dispatch => {
    dispatch({
      type : constants.CHANGE_FILTER_VALUE,
      searchByFilterValue : value
    });
  }

}

function changeSearchValue (value) {
  return dispatch => {
    dispatch({
      type : constants.CHANGE_SEARCH_VALUE,
      searchValue : value
    });
  }

}

function changeIsSearching(value) {
  return dispatch => {
    dispatch({
      type : constants.CHANGE_IS_SEARCHING,
      isSearching : value
    });
  }

}
function changeIsLoading(bool) {
  return dispatch => {
    dispatch({
      type : constants.CHANGE_IS_LOADING,
      isLoading : bool
    });
  }
}

export default{
  changeFilterValue,
  changeIsSearching,
  changeSearchValue,
  getCategoryOfStocks,
  getSearchedStocks,
  getStocks,
  setStocksActiveCategoryAndIsLoading,
  updateStocks,
  changeIsLoading

};
