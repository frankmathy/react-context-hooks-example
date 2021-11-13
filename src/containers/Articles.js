import React, { useState } from 'react';
import Article from '../components/Article/Article';

const Articles = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'post 1', body: 'Ein Testtext, super!' },
    { id: 2, title: 'post 1', body: 'Ein Testtext, super!' }
  ]);

  return (
    <div>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
