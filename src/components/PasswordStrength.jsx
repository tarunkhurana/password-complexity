import React from 'react';
import PropTypes from 'prop-types';

import Password from './Password';
import PasswordCriteria from './PasswordCriteria';
import Checkbox from './Checkbox';
import ComplexityMeter from './ComplexityMeter';
import RulesList from './RulesList';

const PasswordStrength = (props) => {
  const {
    value,
    checked,
    type,
    showMeter,
    meterWidth,
    meterFeedback,
    rules,
    onChangePassword,
    onFocusPassword,
    onChangePasswordType,
  } = props;
  return (
    <div className="container">
      <h1>Password Complexity Meter</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="pcm-password-strength">
            <hr />
            <Password
              value={value}
              type={type}
              onChangePassword={onChangePassword}
              onFocusPassword={onFocusPassword}
            />
            <Checkbox
              checked={checked}
              onChangePasswordType={onChangePasswordType}
            />
            {showMeter ? (
              <ComplexityMeter width={meterWidth} feedback={meterFeedback} />
            ) : (
              ''
            )}
            <hr />
            <RulesList rules={rules} />
          </div>
        </div>
        <div className="col-md-6">
          <PasswordCriteria />
        </div>
      </div>
    </div>
  );
};

PasswordStrength.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  showMeter: PropTypes.bool.isRequired,
  meterWidth: PropTypes.number.isRequired,
  meterFeedback: PropTypes.string.isRequired,
  rules: PropTypes.shape({}),
  onChangePassword: PropTypes.func.isRequired,
  onFocusPassword: PropTypes.func.isRequired,
  onChangePasswordType: PropTypes.func.isRequired,
};

PasswordStrength.defaultProps = {
  rules: null,
};

export default PasswordStrength;
