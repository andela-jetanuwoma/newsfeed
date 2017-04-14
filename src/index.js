import React from 'react';
import ReactDOM from 'react-dom';
import NewsFeedApp from './components/NewsFeedApp';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



ReactDOM.render(
  <NewsFeedApp />,
  document.getElementById('root')
);
