import React, { createContext, useState } from 'react';

export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'post 1', body: 'Ein Testtext, super!' },
    { id: 2, title: 'post 2', body: 'Noch ein Testtext, super!' }
  ]);

  const saveArticle = article => {
    const newArticle = {
      id: Math.random(),
      title: article.title,
      body: article.body
    };
    setArticles([...articles, newArticle]);
  };
  return (
    <ArticleContext.Provider value={{ articles, saveArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
