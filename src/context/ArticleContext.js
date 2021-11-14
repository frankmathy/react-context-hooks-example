import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';
export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, dispatch] = useReducer(reducer, [
    { id: 1, title: 'post 1', body: 'Ein Testtext, super!' },
    { id: 2, title: 'post 2', body: 'Noch ein Testtext, super!' }
  ]);

  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
