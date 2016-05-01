import * as ProgramConstants from 'constants/ProgramConstants';
let constants = ProgramConstants.default;

import {genericWebAPICall} from 'utils/AppAPI';

function getCurriculum(requestObject) {
  return dispatch => {
    var url = 'transparencydonations/getTransparencyBriefDetails/v1/',
    onSuccess = function (response) {
      dispatch({
          type : constants.GET_CURRICULUMS,
          curriculums : response
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


export default{
  getCurriculum
};
