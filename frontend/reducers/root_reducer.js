import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';
import AlbumReducer from './album_reducer';
import UserReducer from './user_reducer';

export const RootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer,
  user: UserReducer,
  albums: AlbumReducer
});

export default RootReducer;
