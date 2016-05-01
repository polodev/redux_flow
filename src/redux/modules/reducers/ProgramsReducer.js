import { createReducer }     from '../../../utils';
import * as ProgramConstants from 'constants/ProgramConstants';
let constants = ProgramConstants.default;

let programsInfo = {
  curriculums : []
};
export default function stocksInfoReducer (state = programsInfo, action) {

  switch (action.type) {
    case constants.GET_CURRICULUMS:
      return Object.assign({},
                state,
                {
                  curriculums : action.curriculums
                }
          );
    default:
      return state;
  }
}
