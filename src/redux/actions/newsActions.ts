import axios from 'axios';
import { Dispatch } from 'redux';
import {NEWS_API_URL, API_KEY} from '../../constants';

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const fetchNews = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_NEWS_REQUEST });
    try {
      const response = await axios.get(`${NEWS_API_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
      dispatch({ type: FETCH_NEWS_SUCCESS, payload: response.data.articles });
    } catch (error) {
      dispatch({ type: FETCH_NEWS_FAILURE, payload: error.message });
    }
  };
};
