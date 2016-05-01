import {genericWebAPICall} from 'utils/AppAPI';

function sendContactUsRequest(requestObject) {
  var url = 'kampaign/contactUsAPI/v1/',
  onSuccess = function (response) {
    $('#contactus-success').show();
    $("#contactus-success").fadeTo(5000, 500).slideUp(500);
  },
  onFailure = function (response) {
    console.log(response);
  };
  genericWebAPICall(url, requestObject, onSuccess, onFailure);
}

export default{
  sendContactUsRequest
};
