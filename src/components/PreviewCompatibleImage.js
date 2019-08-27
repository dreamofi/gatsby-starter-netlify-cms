import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PreviewCompatibleImage = ({imageInfo}) => {
  const imageStyle = {borderRadius: '5px'};
  const {alt = '', childImageSharp, image} = imageInfo;

  if (!!image && !!image.childImageSharp) {
    // console.log('Case 1');
    // console.log(image);
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    );
  }

  if (!!childImageSharp) {
    // console.log('Case 2');
    // console.log(image);
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }

  if (!!image && typeof image === 'string') {
    // console.log('Case 3');
    // console.log(image);
    return <img style={imageStyle} src={image} alt={alt} />;
  }
  // console.log('Case 4');
  // console.log(imageInfo);
  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
