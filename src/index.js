import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import GlobalStyles from './globalStyles'

ReactDOM.render(
  <><React.StrictMode>
    <Routes /><GlobalStyles></GlobalStyles>
  </React.StrictMode></>,
  document.getElementById('root')
);

