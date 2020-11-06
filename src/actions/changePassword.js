import { CHANGE_PASSWORD } from './actionTypes';

export default (value) => {
  return {
    type: CHANGE_PASSWORD,
    payload: {
      value,
    },
  };
};
