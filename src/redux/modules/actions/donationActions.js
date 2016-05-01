import * as DonationConstants from 'constants/DonationConstants';
let constants = DonationConstants.default;

import {genericWebAPICall} from 'utils/AppAPI';

function getDonations(requestObject) {
  return dispatch => {
    var url = 'transparencydonations/getListOfDonationsNew/v1/',
    onSuccess = function (response) {
      $('.donations-loader').hide();
      dispatch({
          type : constants.GET_DONATIONS,
          donations : response,
          isLoading : false
      });
    },
    onFailure = function (response) {
      console.log(response);
    };
    genericWebAPICall(url, requestObject, onSuccess, onFailure);
  }
}

function setDonationType (type) {
  return dispatch => {
    dispatch({
      type : constants.SET_DONATION_TYPE,
      donationType: type
    });
  }
}

function updateDonations(requestObject) {
  return (dispatch,getState) => {
    var url = 'transparencydonations/getListOfDonationsNew/v1/',
    onSuccess = function (response) {
      $('.donations-loader').hide();
      console.log('getState', getState());
      if(getState().donationsInfo.donationType==='MONETARY'){
        $('#monetary-loading-text').show();
        $('#monetary-loading-icon').hide();
        if(response.donations.length<9){
          $('.monetary-load-more').hide();
        }
      }
      else{
        $('#items-loading-icon').hide();
        $('#items-loading-text').show();
        if(response.donations.length<9){
          $('.items-load-more').hide();
        }
      }
      dispatch({
        type : constants.UPDATE_DONATIONS,
        donations : response,
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
function getSearchedDonations(requestObject) {
  return (dispatch, getState) => {
    var url = 'transparencydonations/getListOfDonationsNew/v1/',
    onSuccess = function (response) {
      $('.donations-loader').hide();
      console.log('getState', getState());
      if(getState().donationsInfo.donationType==='MONETARY'){
        $('#monetary-loading-text').show();
        $('#monetary-loading-icon').hide();
        if(response.donations.length<9){
          $('.monetary-load-more').hide();
        }
      }
      else{
        $('#items-loading-icon').hide();
        $('#items-loading-text').show();
        if(response.donations.length<9){
          $('.items-load-more').hide();
        }
      }
        
      dispatch({
          type : constants.GET_SEARCHED_DONATIONS,
          searchedDonations : response,
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

export default{
  getDonations,
  setDonationType,
  updateDonations,
  getSearchedDonations,
  
  setFromDateTime,
  setToDateTime,
  changeIsSearching, changeIsLoading, changeFilterValue,
  changeSearchValue
};
