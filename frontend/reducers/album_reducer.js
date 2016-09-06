import merge from 'lodash/merge';
import {AlbumConstants} from "../actions/album_actions";

// const defaultState = Object.freeze({currentUser: null, errors:[]});
const AlbumReducer = (oldState = [] , action) => {
  switch (action.type) {
    case AlbumConstants.RECEIVE_ALL_ALBUMS:
      return [...action.albums];
    case AlbumConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {errors});
    default:
      return oldState
  }
};

export default AlbumReducer;
