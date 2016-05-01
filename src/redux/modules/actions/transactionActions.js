import * as TransactionConstants from 'constants/TransactionConstants';
let constants = TransactionConstants.default;

import {genericWebAPICall} from 'utils/AppAPI';

function setAskUsLoaderState(askUsLoaderState) {
  return{
    type : constants.SET_ASK_US_LOADER,
    askUsLoaderState : askUsLoaderState
  };
}

function getTransactions(requestObject) {
  return dispatch => {
    var url = 'transparencydonations/getTransparencyBriefDetails/v1/',
    onSuccess = function (response) {
      if(response.length>0){
        if(response.length<9){
          document.getElementById('loadmorefortransparency').style.display = 'none';
        }
        else{
          document.getElementById('loadmorefortransparency').style.display = 'block';
        }
      }
      dispatch({
          type : constants.GET_TRANSACTIONS,
          transactions : response,
          isLoading : false
      });
    },
    onFailure = function (response) {
      console.log(response);
    };
    genericWebAPICall(url, requestObject, onSuccess, onFailure);
  }
}

function updateTransactions(requestObject, isSearching) {
  return dispatch => {
    var url = 'transparencydonations/getTransparencyBriefDetails/v1/',
    onSuccess = function (response) {
      if(response.length>0){
        if(response.length<9){
          document.getElementById('loadmorefortransparency').style.display = 'none';
        }
        else{
          document.getElementById('loadmorefortransparency').style.display = 'block';
        }
      }

      if(response.length===0){
          document.getElementById('loadmorefortransparency').style.display = 'none';
      }
      else if(response.length<9){
          document.getElementById('loadmorefortransparency').style.display = 'none';
      }
      else{
          document.getElementById('loadmorefortransparency').style.display = 'block';
          document.getElementById('loading-text').style.display = 'inline';
          document.getElementById('loading-icon').style.display = 'none';
      }
      dispatch({
          type : constants.UPDATE_TRANSACTIONS,
          transactions : response,
          isSearching : isSearching,
          isLoading : false
      });
    },
    onFailure = function (response) {
      console.log(response);
    };
    genericWebAPICall(url, requestObject, onSuccess, onFailure);
  }
}

/**
 * following function created by Polo dev
 */
//ActionCreator Making API call
function getSearchedTransactions(requestObject) {
  return dispatch => {
    var url = 'transparencydonations/searchTransparencyBriefDetails/v1/',
    onSuccess = function (response) {
        // Resets polo. I will apply later in both places getTransactions and getSearchedTransactions
        // if(response.length<9){
        //   document.getElementById('loadmorefortransparency').style.display = 'none';
        // } else{
        //   document.getElementById('loadmorefortransparency').style.display = 'block';
        // }
        
      dispatch({
          type : constants.GET_SEARCHED_TRANSACTIONS,
          searchedTransactions : response,
          isLoading : false,
          isSearching : true

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
function getExpenditureDetails(requestObject) {
  return dispatch => {
    var url = 'donations/getExpenditureDetailsForCategoryAPI/v1/',
    onSuccess = function (response) {
      dispatch({
          type : constants.GET_EXPENDITURE_DETAILS,
          expenditures : response,
          isLoading : false
      });
    },
    onFailure = function (response) {
      console.log(response);
    };
    genericWebAPICall(url, requestObject, onSuccess, onFailure);
  }
}

//ActionCreator just set value to global state 
function setFromDateTime(FromDateTime) {
  return dispatch => {
    dispatch({
      type : constants.SET_FROM_DATE_TIME,
      fromDateTime : FromDateTime
    });
  }
}

function setToDateTime(ToDateTime) {
  return dispatch => {
    dispatch({
      type : constants.SET_TO_DATE_TIME,
      toDateTime : ToDateTime
    });
  }
}

function changeIsSearching(bool) {
  return dispatch => {
    dispatch({
      type : constants.CHANGE_IS_SEARCHING,
      isSearching : bool
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

function changeFilterValue(value) {
  return dispatch => {
    dispatch({
      type : constants.CHANGE_SEARCH_BY_FILTER_VALUE,
      searchByFilterValue : value
    });
  }
}

function changeSearchValue(value) {
  return dispatch => {
    dispatch({
      type : constants.CHANGE_SEARCH_VALUE,
      searchValue : value
    });
  }
}
//currently changeIsExpenditure function is not using 
function changeIsExpenditure(value) {
  return dispatch => {
    dispatch({
      type : constants.CHANGE_IS_EXPENDITURE,
      isExpenditure : value
    });
  }
}

export default{
setAskUsLoaderState,
getTransactions,
updateTransactions,
setFromDateTime,
setToDateTime,
getSearchedTransactions,
changeIsSearching,
changeIsLoading,
changeFilterValue,
changeSearchValue,
getExpenditureDetails

};
