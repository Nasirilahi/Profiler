import { combineReducers } from 'redux';
import projectListReducer from './projectListReducer';

const rootReducer = combineReducers({
    projectList:projectListReducer,
});

export default rootReducer;
