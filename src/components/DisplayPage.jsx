import React from 'react';
import Articles from './Articles';
import Header from './Header';
import MoreButton from './MoreButton';
import '../style/DisplayPage.css';
import mic from '../../public/Mic.png';

const DisplayPage = () => {
  return (
    <div className="display-container">
      <img src={mic} alt="Mic.com logo"></img>
      <table>
        <tbody>
          <Header />
          <Articles />
        </tbody>
      </table>
      <MoreButton />
    </div>
  )
}

export default DisplayPage;
