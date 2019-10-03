import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const FeatureGrid = ({gridItems}) => {
  const colorList = ['gold', 'blue', 'green', 'purple'];
  return (
    <div className="w-90 w-80-m w-70-l center pt3 flex flex-wrap mid-gray items-stretch justify-center">
      {gridItems.map((item, index) => {
        console.log(item);
        return (
          <div
            key={item.heading}
            className="flex flex-wrap w-80-m w-50-l pa3 shadow-hover">
            <section className="w-100 ba br3 b--moon-gray">
              <div
                className={`bg-${colorList[index]} pv1 bt b--${colorList[index]} br3 br--top`}>
                <h2 className="tc white f5 f4-l">{item.heading}</h2>
              </div>

              <div className="tc bg-near-white">
                <div className="db w-40 pv3 center">
                  <PreviewCompatibleImage imageInfo={item} />
                </div>
              </div>

              <div className="f6 f5-l pa3 ph4">
                <ul>
                  {item.text.map(each => (
                    <li key={each} className="f5">
                      {each}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};
FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.array,
    }),
  ),
};

export default FeatureGrid;
