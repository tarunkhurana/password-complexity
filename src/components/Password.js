/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const Password = React.memo(function Password({
  type,
  value,
  onChangePassword,
  onFocusPassword,
}) {
  return (
    <span>
      <label htmlFor="password">Enter Password</label>
      <input
        id="password"
        name="password"
        type={type}
        value={value}
        placeholder="Enter Password..."
        className="form-control"
        onChange={(e) => onChangePassword(e.target.value)}
        onFocus={() => onFocusPassword()}
      />
    </span>
  );
});

Password.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onFocusPassword: PropTypes.func.isRequired,
};

export default Password;
