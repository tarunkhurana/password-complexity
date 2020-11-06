import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PasswordStrength from '../components/PasswordStrength';
import changePasswordAction from '../actions/changePassword';
import changePasswordTypeAction from '../actions/changePasswordType';
import focusPasswordAction from '../actions/focusPassword';
import {
  getPassword,
  getPasswordType,
  showPassword,
  showMeter,
  getMeterWidth,
  getMeterFeedback,
  getRulesList,
} from '../reducers';

const mapStateToProps = (state) => ({
  value: getPassword(state),
  checked: showPassword(state),
  type: getPasswordType(state),
  showMeter: showMeter(state),
  meterWidth: getMeterWidth(state),
  meterFeedback: getMeterFeedback(state),
  rules: getRulesList(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onChangePassword: changePasswordAction,
      onChangePasswordType: changePasswordTypeAction,
      onFocusPassword: focusPasswordAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PasswordStrength);
