import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';
import { Action, Dispatch } from 'redux';

export enum ActionType {
  LOAD_HOME_PARAMETERS_SUCCESS = '[Home]  Home select item success'
}

export type LoadHomeParametersSuccess = {
  type: typeof ActionType.LOAD_HOME_PARAMETERS_SUCCESS;
  payload: {};
};
// actions

export function LoadHomeParametersSuccess(payload: {}): LoadHomeParametersSuccess {
  return { type: ActionType.LOAD_HOME_PARAMETERS_SUCCESS, payload };
}

// Action Creators

export function loadHomeParameters(): ThunkAction<
  void,
  AppState,
  null,
  Action
> {
  //  Logger.log('[Store] loadHomeParameters');
  return (dispatch: Dispatch, currentState: () => AppState) => {
    dispatch(LoadHomeParametersSuccess({ pepe: 'S' }));
  };
}

export type Actions = LoadHomeParametersSuccess;
