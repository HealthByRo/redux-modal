import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import modalReducer from '../src/reducer';

const reducers = {
  modal: modalReducer,
};
const initialState = fromJS({
  modal: {
    openedModalName: 'TestModal',
  },
});

const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

addDecorator((story) => (
  <Provider store={store}>
    {story()}
  </Provider>
));

// Load stories
const req = require.context('../src/', true, /\.stories\.js?$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
