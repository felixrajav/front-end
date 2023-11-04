import { combineReducers } from 'redux';

import authReducer from './auth';
import currentuserReduser from './currentUser'
import questionReduser from './questions'
import usersReducer from './users';

export default combineReducers({
    authReducer,currentuserReduser,questionReduser,usersReducer
})