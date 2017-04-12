import React from 'react';

const MoreButton = () => {
  return (
    <div>
      <button onClick={() => {console.log('Load more articles')}}>Load More</button>
    </div>
  )
}

export default MoreButton;
