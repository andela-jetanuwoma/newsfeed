import React from 'react';
import NewsStore from '../stores/NewsStore';
import AppActions from '../actions/AppActions';
import NewsSourcesStore from '../stores/NewsSourcesStore';
import API from '../configs/API';
import SourcesContainer from '../configs/newsContainer';
import request from 'request';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomeView from '../views/HomeView';
import SourcesView from '../views/SourcesView';
import ArticlesView from '../views/ArticlesView';




let NewsFeedApp = React.createClass({


  /**
   * @return {object}
   */
  render:()=>{
       
      
        return <Router>

        <div>
      

      <Route exact path="/" component={HomeView} />
      <Route exact path="/discover" component={SourcesView} />
      <Route path="/articles/:id" component={ArticlesView}/>

        </div>

        </Router>


     }
  

});

export default NewsFeedApp;