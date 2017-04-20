import * as types from '../actions/action-types';

export function postNewsSuccess(lastNews) {
  return {
    type: types.POST_NEWS_SUCCESS,
    lastNews
  };
}

export function getNewsSuccess(news) {
  return {
    type: types.GET_NEWS_SUCCESS,
    news
  };
}

export function getNewsFriendsSuccess(newsFriend) {
  return {
    type: types.GET_NEWS_FRIENDS,
    newsFriend
  };
}

export function getMoreNewsSuccess(apenedNews) {
  return {
    type: types.GET_MORE_NEWS_SUCCESS,
    apenedNews
  };
}

export function resetNewsProps() {
  return {
    type: types.RESET_NEWS_SUCCESS,
    reset: [null]
  }
}
