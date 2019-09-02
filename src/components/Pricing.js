import React from 'react';
import PropTypes from 'prop-types';

const Pricing = ({data}) => (
  <div className="flex flex-wrap justify-center">
    {data.map(price => (
      <div key={price.plan} className="w-100 w-33-m w-33-l pa2">
        <section className="">
          <h4 className="tc b">{price.plan}</h4>
          <h2 className="f4 f3-l b tc">${price.price}</h2>
          <p>{price.description}</p>
          <ul>
            {price.items.map(item => (
              <li key={item} className="f5">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    }),
  ),
};

export default Pricing;
