import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { btnName, btnType, bgColor } = props;
  return (
    <button
      type={btnType === 'button' ? 'button' : 'submit'}
      className={`${bgColor} py-2 px-5 rounded-full font-semibold`}
    >
      {btnName}
    </button>
  );
};

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Button;
