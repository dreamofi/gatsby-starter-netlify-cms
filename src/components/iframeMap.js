import React from 'react';
import Iframe from 'react-iframe';

const IframeMap = () => {
  return (
    <iframe
      title="Test yea"
      width="425"
      height="350"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      url="https://www.openstreetmap.org/export/embed.html?bbox=105.8055952191353%2C21.05821756409174%2C105.80913573503496%2C21.060310124142564&amp;layer=mapnik&amp;marker=21.059263847795577%2C105.80736547708511"
      display="initial"
      position="relative"></iframe>
  );
};

export default iframeMap;
