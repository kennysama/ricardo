import { combineReducers } from 'redux';

import { homeReducer, IHomeState } from './reducer';
// import { createSelector } from 'reselect';
import { AppState } from '..';

export * from './actions';

export interface IHomeFeature {
  home: IHomeState;
}

export const reducers = combineReducers({
  home: homeReducer
});
const featureSelector = (state: AppState): IHomeFeature => state.homeFeature;

// const getHomeSelectionState = createSelector(
//   featureSelector,
//   state => state.home,
// );
