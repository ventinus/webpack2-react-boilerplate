import React from 'react';
const { PropTypes } = React;

const LocalImg = ({name, className, alt, style}) => {
  return (
    <img src={ `/assets/images/${name}` } className={ className } alt={ `${alt}` } style={ style }/>
  );
}

LocalImg.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object
};

LocalImg.defaultProps = {
  className: '',
  alt: '',
  style: {}
};

export default LocalImg;
