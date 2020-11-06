import React from 'react';

const PasswordCriteria = React.memo(function PasswordCriteria() {
  return (
    <div>
      <h4>Password Criteria</h4>
      <ul>
        <li>Minimum 8 characters in length</li>
        <li>
          Contains 3/4 of the following items:
          <ul>
            <li>Uppercase Letters</li>
            <li>Lowercase Letters</li>
            <li>Numbers</li>
            <li>Symbols</li>
          </ul>
        </li>
      </ul>
      <h5>The password strength score should get lowered based on </h5>
      <ul>
        <li>Entering Letter only </li>
        <li>Entering Numbers only</li>
        <li>Repeated characters (Case insensitive)</li>
        <li>Consecutive Uppercase Letters </li>
        <li>Consecutive Lowercase Letters</li>
        <li>Consecutive Numbers</li>
        <li>Sequential Letters</li>
        <li>Sequential Numbers </li>
        <li>Sequential Symbols </li>
      </ul>
    </div>
  );
});

export default PasswordCriteria;
