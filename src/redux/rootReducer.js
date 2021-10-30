import { combineReducers } from 'redux';
import petitionReducer from './petition/reducers/petition.reducers';

const rootReducer = combineReducers({
  petitions: petitionReducer,
});

export default rootReducer;
