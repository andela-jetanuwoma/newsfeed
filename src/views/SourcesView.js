import React, {Component} from 'react';
import _ from 'lodash'
import site_logo from '../assets/images/rss.png';
import temp_user from '../assets/images/matthew.png';
import src from '../assets/images/matthew.png';
import '../App.css';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Card, Search, Grid, } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react';
import NewsSourcesStore from '../stores/NewsSourcesStore';
import AppActions from '../actions/AppActions';

class  SourcesView extends Component{
   getItemsState() {
	  return {
	  	sources:NewsSourcesStore.getAll(),
	    visibility:false,
	    activepage: 'discover',
	  };
   }

   state = {visibility:false,
	    activepage: 'discover'}
	
     _onChange = () =>{
     	
     	this.setState(this.getItemsState());

     }

	  toggleVisibility = () => this.setState({ visibility: !this.state.visibility });

	   resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

    handleSearchChange = (e, value) => {
    this.setState({ isLoading: true, value })

      setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.header)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.sources, isMatch),
      })
    }, 500)
  }
	componentDidMount = ()=>{
         NewsSourcesStore.addChangeListener(this._onChange);
     }

     componentWillUnMount = ()=>{
         NewsSourcesStore.removeChangeListener(this._onChange);
     }

	render(){
		const { visibility,activepage, isLoading, value, results,sources } = this.state;

		return (
<div onLoad = {AppActions.getSources()}>
 
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='wide' visible={visibility} icon='labeled' vertical inverted>
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
          <Menu.Item name={activepage} active={activepage === 'discover'} />
          <Menu.Item name='Feeds' active={activepage === 'feeds'} />
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
            News Sources
           <Header.Subheader>
              </Header.Subheader>
           </Header>

          
        
          <Search
            className="container"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            fluid
          ></Search>
        
        
           <Card.Group itemsPerRow={4} className="container" items={this.state.sources} />
               </div>
            </Segment>


          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
			);
	}
}


export default SourcesView;