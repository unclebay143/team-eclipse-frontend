import { combineReducers } from 'redux';
import adminReducer from './admin/reducers/admin.reducers';
import agencyReducer from './agency/reducers/agency.reducers';
import petitionReducer from './petition/reducers/petition.reducers';

const rootReducer = combineReducers({
  petitions: petitionReducer,
  admin: adminReducer,
  agency: agencyReducer,
});

export default rootReducer;
