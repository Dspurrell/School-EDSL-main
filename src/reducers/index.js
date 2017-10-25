import {combineReducers} from 'redux';

import teamReducer from './teams-reducers';
import divisionReducer from './division-reducers';
import seasonReducer from './season-setup-reducers';

const rootReducer = combineReducers({
    teams : teamReducer,
    divisions: divisionReducer,
    season: seasonReducer
});

export default rootReducer;
