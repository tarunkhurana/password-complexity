import { CHANGE_PASSWORD_TYPE } from './actionTypes';

export default (checked) => {
  return {
    type: CHANGE_PASSWORD_TYPE,
    payload: {
      checked,
      type: checked ? 'text' : 'password',
    },
  };
};
