import React, { Fragment } from 'react';
import Articles from './containers/Articles';
import AddArticle from './components/AddArticle/AddArticle';

function App() {
  return (
    <Fragment>
      <AddArticle />
      <Articles />
    </Fragment>
  );
}

export default App;
