import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import newsReducer from './news-reducer';
import friendsReducer from './friends-reducer';
import sessionReducer from './session-reducer';
import gallereyReducer from './gallerey-reducer';
import globalReducer from './global-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState:      userReducer,
    newsState:      newsReducer,
    friendsState:   friendsReducer,
    sessionState:   sessionReducer,
    gallereyState:  gallereyReducer,
    globalState:    globalReducer
});

export default reducers;
