import React from 'react';
import ArticleProvider from './context/ArticleContext';
import Articles from './containers/Articles';
import AddArticle from './components/AddArticle/AddArticle';

function App() {
  return (
    <ArticleProvider>
      <AddArticle />
      <Articles />
    </ArticleProvider>
  );
}

export default App;
