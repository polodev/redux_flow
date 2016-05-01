// import * as constants from 'constants/AppConstants';
import * as auth from './auth';

  export function genericWebAPICall (url, requestObject, onSuccess, onFailure, type='POST') {
    // var cookie = auth.getCookie('access_token');

    // Resets Ranjith Nori
    // Sample alpha auth token
    var cookie = 'bzVoWi9KplpbEPZSdnEbnHYMuLnoPW';
    //Sample beta auth token
    // var cookie = 'KuJRwR4yDoGMRG6vwFM3mYzGlWnaVS';
    if(type == 'POST'){
      const formattedrequestObject = JSON.stringify(JSON.stringify(requestObject));
      const dataRequestObject = JSON.stringify({'data':formattedrequestObject, 'clientKeyDetailsId':1});
      // console.log('dataRequestObject >>> ', dataRequestObject);
      $.ajax({
        type: 'POST',
        url: AppConstants.BASE_URL + url,
        beforeSend: function (xhr) {
          xhr.setRequestHeader('x-api-key', 'ce1JCgYMj53CLOm9OnpPL53JpsOVStSh3UKtWis2');
          xhr.setRequestHeader('Authorization', 'Bearer '+cookie);
        },
        data: dataRequestObject,
        contentType:'application/json; charset=UTF-8'
      })
        .done(
          function doneHandler(msg) {
            if($.type(msg)=="string"){
              msg = JSON.parse(msg);
            }
            if(msg.status==="NOT_OK"){
              // alert(url);
              onFailure(msg);
            }else{
              onSuccess(msg)
            }
          }
        )
        .fail(onFailure);
    }else if(type == 'GET'){
      $.ajax({
        type: 'GET',
        url: AppConstants.BASE_URL + url,
        beforeSend: function (xhr) {
          xhr.setRequestHeader('x-api-key', 'ce1JCgYMj53CLOm9OnpPL53JpsOVStSh3UKtWis2');
          xhr.setRequestHeader('Authorization', 'Bearer '+cookie);
        },
        contentType:'application/json; charset=UTF-8'
      })
        .done(
          function doneHandler(msg) {
            if($.type(msg)=="string"){
              msg = JSON.parse(msg);
            }
            if(msg.status==="NOT_OK"){
              // alert(url);
              onFailure(msg);
            }else{
              onSuccess(msg)
            }
          }
        )
        .fail(onFailure);
    }
  }
