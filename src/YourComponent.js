// YourComponent.js
import React from 'react';
function handleArticleLinkClick(event, link) {
    event.preventDefault();
    window.location.href = link;
  }
function YourComponent({ articles }) {
  // Your component's logic here

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href="#" onClick={(e) => handleArticleLinkClick(e, article.link)}>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourComponent;
