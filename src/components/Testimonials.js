import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

const Testimonials = ({testimonials}) => (
  <div className="pa3 pa4-l">
    {testimonials.map(testimonial => (
      <article key={v4()} className="bg-light-gray mb3 pa3 br3">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};

export default Testimonials;
