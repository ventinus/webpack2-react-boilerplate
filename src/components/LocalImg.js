import React from 'react';
const { PropTypes } = React;

const LocalImg = ({name, className, alt}) => {
  return (
    <img src={ `/src/assets/images/${name}` } className={ className } alt={ `${alt}` }/>
  );
}

LocalImg.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string
};

LocalImg.defaultProps = {
  className: '',
  alt: ''
};

export default LocalImg;
