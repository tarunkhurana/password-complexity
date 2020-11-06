import React from 'react';
import PropTypes from 'prop-types';
import './ComplexityMeter.css';

const ComplexityMeter = React.memo(function ComplexityMeter({
  width,
  feedback,
}) {
  return (
    <div>
      <h4>{feedback}</h4>
      <div className="pcm-validation-meter-wrapper">
        <div
          className={`pcm-validation-meter-progress ${feedback
            .split(' ')
            .join('-')
            .toLowerCase()}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
});

ComplexityMeter.propTypes = {
  width: PropTypes.number.isRequired,
  feedback: PropTypes.string.isRequired,
};

export default ComplexityMeter;
