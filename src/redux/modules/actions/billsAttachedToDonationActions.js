import * as BillsAttachedToDonationConstants from 'constants/BillsAttachedToDonationConstants';
let constants = BillsAttachedToDonationConstants.default;

import {genericWebAPICall} from 'utils/AppAPI';

function getBillsAttachedToThisDonation(requestObject) {
  return dispatch => {
    var url = 'transparencydonations/getPublicListOfBillsForDonation/v1/',
    onSuccess = function (response) {
      $('.donation-bills-loader').hide();
      $('.donation-cards').show();
      dispatch({
          type : constants.GET_BILLS_ATTACHED_TO_DONATIONS,
          bills : response
      });
    },
    onFailure = function (response) {
      console.log(response);
      $('.donation-bills-loader').hide();
      $('.donation-cards').show();
    };
    dispatch({
        type : constants.RESET_BILLS_ATTACHED,
        bills : []
    });
    genericWebAPICall(url, requestObject, onSuccess, onFailure);
  }
}

export default{
  getBillsAttachedToThisDonation
};
