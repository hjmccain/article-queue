import React from 'react';
import '../style/MoreButton.css';

const MoreButton = () => {
  return (
    <div className="button-container">
      <button onClick={() => {console.log('Load more articles')}}>Load More</button>
    </div>
  )
}

export default MoreButton;
