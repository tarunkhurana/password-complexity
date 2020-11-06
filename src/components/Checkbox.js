import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = React.memo(function Checkbox({
  checked,
  onChangePasswordType,
}) {
  return (
    <label htmlFor="show-password">
      <input
        id="show-password"
        name="show-password"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChangePasswordType(e.target.checked)}
      />
      {checked ? 'Hide Password' : 'Show Password'}
    </label>
  );
});

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChangePasswordType: PropTypes.func.isRequired,
};

export default Checkbox;
