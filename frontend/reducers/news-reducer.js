import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  news: undefined,
  onlyUserNews: []
};

const newsReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.POST_NEWS_SUCCESS:
      return Object.assign({}, state, { lastNews: action.lastNews });

    case types.GET_NEWS_SUCCESS:
      return Object.assign({}, state, { news: action.news });

    case types.ONLY_USER_NEWS_SUCCESS:
      return Object.assign({}, state, { onlyUserNews: action.onlyUserNews });
  }

  return state;

}

export default newsReducer;
