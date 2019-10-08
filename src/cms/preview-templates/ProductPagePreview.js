import React from 'react';
import PropTypes from 'prop-types';
import {ProductPageTemplate} from '../../templates/product-page';
import {MarkdownTemplate} from '../../templates/product-page';

const ProductPagePreview = ({entry, getAsset, widgetFor}) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs']);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  // console.log(entry.getIn(['data', 'main', 'image1']));
  // console.log(getAsset(entry.getIn(['data', 'main', 'image1', 'image'])));

  return (
    <div>
      <ProductPageTemplate
        image={entry.getIn(['data', 'image'])}
        title={entry.getIn(['data', 'title'])}
        heading={entry.getIn(['data', 'heading'])}
        description={entry.getIn(['data', 'description'])}
        intro={{blurbs}}
        main={{
          heading: entry.getIn(['data', 'main', 'heading']),
          description: entry.getIn(['data', 'main', 'description']),
          image1: {
            image: entry.getIn(['data', 'main', 'image1', 'image']),
            alt: entry.getIn(['data', 'main', 'image1', 'alt']),
          },
          image2: {
            image: entry.getIn(['data', 'main', 'image2', 'image']),
            alt: entry.getIn(['data', 'main', 'image2', 'alt']),
          },
          image3: {
            image: entry.getIn(['data', 'main', 'image3', 'image']),
            alt: entry.getIn(['data', 'main', 'image3', 'alt']),
          },
        }}
      />
      <MarkdownTemplate content={widgetFor('body')} />
    </div>
  );
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
};

export default ProductPagePreview;
