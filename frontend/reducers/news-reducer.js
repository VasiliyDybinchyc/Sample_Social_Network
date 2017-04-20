import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  news: [null],
  newsFriend: []
};

const newsReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.POST_NEWS_SUCCESS:
      return Object.assign({}, state, { news: action.lastNews.concat(state.news) });

    case types.GET_NEWS_SUCCESS:
      return Object.assign({}, state, { news: action.news });

    case types.GET_NEWS_FRIENDS:
      return Object.assign({}, state, { newsFriend: state.newsFriend.concat(action.newsFriend) });

    case types.RESET_NEWS_SUCCESS:
      return Object.assign({}, state, { news: action.reset });

    case types.GET_MORE_NEWS_SUCCESS:
      return Object.assign({}, state, { news: state.news.concat(action.apenedNews) });

  }

  return state;

}

export default newsReducer;
