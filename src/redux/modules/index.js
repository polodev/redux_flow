import { combineReducers }    from 'redux';
import { routerReducer }       from 'react-router-redux';
import billsAttachedToDonationInfo from './reducers/BillsAttachedToDonationReducer'
import donationsInfo          from './reducers/DonationReducer';
import transactionsInfo          from './reducers/TransactionReducer';
import stocksInfo          from './reducers/StockReducer';
import programsInfo          from './reducers/ProgramsReducer';

export default combineReducers({
  router: routerReducer,
  billsAttachedToDonationInfo: billsAttachedToDonationInfo,
  donationsInfo: donationsInfo,
  stocksInfo : stocksInfo,
  transactionsInfo: transactionsInfo,
  programsInfo : programsInfo 

});
