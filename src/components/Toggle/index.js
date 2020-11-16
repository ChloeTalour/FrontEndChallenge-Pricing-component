/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Toggle = ({ setIsMonthly, isMonthly }) => {
  const tryOn = () => {
    setIsMonthly(!isMonthly);
  };
  return (
    <div className="toggle">
      <p className={isMonthly ? 'toggle__choice' : 'toggle__choice valid'}>Annually</p>
      <label className="toggle__switch">
        <input type="checkbox" className="toggle__switch--input" onClick={tryOn} />
        <span className="toggle__switch--slider" />
      </label>
      <p className={isMonthly ? 'toggle__choice valid' : 'toggle__choice'}>Monthly</p>
    </div>
  );
};

Toggle.propTypes = {
  setIsMonthly: PropTypes.func.isRequired,
  isMonthly: PropTypes.bool.isRequired,
};

export default Toggle;
