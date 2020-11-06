import React from 'react';
import PropTypes from 'prop-types';
import './RulesList.css';

const RulesList = React.memo(function RulesList({ rules }) {
  if (!rules) {
    return null;
  }
  return (
    <div className="pcm-rules-list row">
      <div className="col-md-6">
        <h4>Valid Rules List</h4>
        <ul className="list-group">
          {Object.keys(rules.validRulesList).map((key, index) => {
            return (
              <li
                className={`list-group-item ${
                  rules.validRulesList[key] ? 'list-group-item-success' : ''
                }`}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                <span>
                  {`${key}-`}
                  <span className="rule-value">
                    {String(rules.validRulesList[key])}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-md-6">
        <h4>Invalid Rules List</h4>
        <ul className="list-group">
          {Object.keys(rules.invalidRulesList).map((key, index) => {
            return (
              <li
                className={`list-group-item ${
                  rules.invalidRulesList[key] ? 'list-group-item-danger' : ''
                }`}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                <span>
                  {`${key}-`}
                  <span className="rule-value">
                    {String(rules.invalidRulesList[key])}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});

RulesList.propTypes = {
  rules: PropTypes.shape({
    validRulesList: PropTypes.shape({}).isRequired,
    invalidRulesList: PropTypes.shape({}).isRequired,
  }),
};

RulesList.defaultProps = {
  rules: null,
};

export default RulesList;
