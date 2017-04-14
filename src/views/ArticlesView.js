import React, {Component} from 'react';
import site_logo from '../assets/images/rss.png';
import temp_user from '../assets/images/matthew.png';
import src from '../assets/images/matthew.png';
import '../App.css';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Card } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react';
import NewsStore from '../stores/NewsStore';
import AppActions from '../actions/AppActions';

function getItemsState() {
  return {
    allItems: NewsStore.getAll()
  };
}

let ArticlesView  = React.createClass({

  getInitialState(){
    return getItemsState();
  },

  componentWillMount(){
  	console.log(this.props.match.params.id);
  },
  
  componentDidMount(){
  	console.log(this.props.match.params.id);
    NewsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount(){
    NewsStore.removeChangeListener(this._onChange);
  },
  
 

  /**
   * @return {object}
   */
  render(){
       
    return <div>
        <h1>{this.props.match.params.id}</h1>
        

    </div>;
  },

  /**
   * Event handler for 'change' events coming from the ListStore
   */
  _onChange:()=>{
    this.setState(getItemsState());
  }

});


export default ArticlesView;