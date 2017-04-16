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
    news: NewsStore.getAll(),
    activepage: 'feeds',
  };
}

let ArticlesView  = React.createClass({
  getNewsId:()=>{
     return this.props.match.params.id;
  },

  getInitialState(){
    return getItemsState();
  },

  componentWillMount(){
  	console.log(this.props.match.params.id);
  },
  
  componentDidMount(){
  	
    NewsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount(){
    NewsStore.removeChangeListener(this._onChange);
  },
  
 

  /**
   * @return {object}
   */
  render(){
    const { activepage } = this.state;
       
    return <div onLoad={AppActions.getNews(this.props.match.params.id)}>
        
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='wide' visible={false} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
           <Menu pointing>
        <Menu.Item name='logo' onClick ={this.toggleVisibility}>
              <Icon name='align justify' size='large' />
        </Menu.Item>
          <Menu.Item name={activepage} active={true} />
          
          <Menu.Menu position='right'>
            <Menu.Item>
              <Image src={temp_user} size='mini' shape='circular' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

            <Segment basic>
               <div className="container">
               <Header as='h2' icon>
                 <Icon name='rss' color='teal' />
            News Feeds
           <Header.Subheader>
              </Header.Subheader>
           </Header>

        
        
           <Card.Group itemsPerRow={4} className="container" items={this.state.news} />
               </div>
            </Segment>


          </Sidebar.Pusher>
        </Sidebar.Pushable>

    </div>;
  },

  /**
   * Event handler for 'change' events coming from the ListStore
   */
  _onChange(){
    this.setState(getItemsState());
  }

});


export default ArticlesView;