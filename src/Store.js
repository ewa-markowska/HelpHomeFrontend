import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './components/reducers';

const Store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export default Store;