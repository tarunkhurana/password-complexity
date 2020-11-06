import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import passwordReducer from './passwordReducer';
import meterReducer from './meterReducer';

export default combineReducers({
  password: passwordReducer,
  meter: meterReducer,
});

export const getPasswordReducer = (state) => state.password;
/**
 * State Selector method that retreives password
 * @param state Full redux state
 * @returns {string} password
 */
export const getPassword = (state) => state.password.value;
/**
 * State Selector method that retreives type of password
 * @param state Full redux state
 * @returns {string} text or password type value
 */
export const getPasswordType = (state) =>
  state.password.checked ? 'text' : 'password';
/**
 * State Selector method that retreives boolean value
 * @param state Full redux state
 * @returns {string} true/false
 */
export const showPassword = (state) => state.password.checked;
/**
 * State Selector method that retreives boolean value
 * @param state Full redux state
 * @returns {boolean} true/false
 */
export const showMeter = (state) => state.meter.show;
/**
 * State Selector method that retreives password meter width
 * @param state Full redux state
 * @returns {number} password meter width
 */
export const getMeterWidth = (state) => state.meter.width;
/**
 * State Selector method that password meter feedback based on input value in password
 * @param state Full redux state
 * @returns {string} meter feedback
 */
export const getMeterFeedback = (state) => state.meter.feedback;

export const getRules = createSelector([getPasswordReducer], (password) => {
  return password.rules;
});

export const getStrictValidationRules = createSelector([getRules], (rules) => {
  return rules && rules.strictValidationRules;
});

export const getComplexValidationRules = createSelector(
  [getRules],
  (rules) => rules && rules.complexValidationRules
);

/**
 * State Selector method that retreives rules list
 * @param state Full redux state
 * @returns {string} password
 */

// eslint-disable-next-line consistent-return
export const getRulesList = createSelector(
  [getStrictValidationRules, getComplexValidationRules],
  (strictValidationRules, complexValidationRules) => {
    if (strictValidationRules && complexValidationRules) {
      return {
        validRulesList: strictValidationRules,
        invalidRulesList: complexValidationRules,
      };
    }
    return null;
  }
);
