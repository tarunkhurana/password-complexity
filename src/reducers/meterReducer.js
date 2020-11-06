import initialState from './initialState';
import { CHANGE_PASSWORD, FOCUS_PASSWORD } from '../actions/actionTypes';
import { getMeterWidth, getMeterFeedback } from '../service/ValidationService';
/**
 * Redux selector to encapsulate the logic of retrieving a password meter data
 * @param value contains password value
 * @returns {object} password meter data
 */
const getMeterProps = (value) => {
  const width = getMeterWidth(value);
  const feedback = getMeterFeedback(width);
  return {
    width,
    feedback,
  };
};

// updated default state of password meter to get meter props
// becuase we have initial state and possible update password
// values to have some default values initially
const defaultState = {
  show: initialState.meter.show,
  ...getMeterProps(initialState.password.value),
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD: {
      const { value } = action.payload;

      return {
        ...state,
        ...getMeterProps(value),
      };
    }
    case FOCUS_PASSWORD:
      return {
        ...state,
        show: true,
      };
    default:
      return state;
  }
};
