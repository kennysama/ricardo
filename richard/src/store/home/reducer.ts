import { Actions, ActionType } from './actions';

export interface IHomeState {
  home: {};
}

export const initialState: IHomeState = {
  home: {}
};

export function homeReducer(
  state: IHomeState = initialState,
  action: Actions
): IHomeState {
  switch (action.type) {
    case ActionType.LOAD_HOME_PARAMETERS_SUCCESS:
      return { ...state, home: { ...action.payload } };
  }

  return state;
}
