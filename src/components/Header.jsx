import React from 'react';
import '../style/Header.css';

const Header = () => {
  return (
    <tr>
      <th className="header-element article-title">Unpublished Articles ({66})</th>
      <th className="header-element author">Author</th>
      <th className="header-element wordcount">Words</th>
      <th className="header-element submitted">Submitted</th>
    </tr>
  )
}

export default Header;
