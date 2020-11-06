import initialState from './initialState';
import { CHANGE_PASSWORD, CHANGE_PASSWORD_TYPE } from '../actions/actionTypes';
import { getRules } from '../service/ValidationService';

export default (state = initialState.password, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD: {
      const { payload } = action;
      const { value } = payload;
      return {
        ...state,
        value,
        rules: { ...getRules(value) },
      };
    }
    case CHANGE_PASSWORD_TYPE: {
      const { payload } = action;
      const { checked } = payload;
      return {
        ...state,
        checked,
      };
    }
    default:
      return state;
  }
};
