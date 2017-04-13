import React from 'react';
import ArticleTable from './ArticleTable';
import MoreButton from './MoreButton';
import '../style/DisplayPage.css';
import mic from '../../public/Mic.png';

const DisplayPage = () => {
  return (
    <div className="display-container">
      <img src={mic} alt="Mic.com logo"></img>
      <h2>/ unpublished</h2>
      <ArticleTable />
      <MoreButton />
    </div>
  )
}

export default DisplayPage;
