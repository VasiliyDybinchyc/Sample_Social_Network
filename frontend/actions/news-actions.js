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

export function getMoreNewsSuccess(apenedNews) {
  return {
    type: types.GET_MORE_NEWS_SUCCESS,
    apenedNews
  };
}

export function getOnlyUserNewsSuccess(onlyUserNews) {
  return {
    type: types.ONLY_USER_NEWS_SUCCESS,
    onlyUserNews
  };
}

export function resetNewsProps() {
  return {
    type: types.GET_NEWS_SUCCESS,
    undefined
  }
}
