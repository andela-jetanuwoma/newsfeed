import React from 'react';
import site_logo from '../assets/images/rss.png';
import '../App.css';
import { Button, Icon } from 'semantic-ui-react'


const HomeView = ({match})=>{
   return <div className="wrapper" >
        <div className="upper_section" >
         <div className="container">
           <nav className="site_nav">
             <div className="logo">
                 <img alt="Site Name" src={site_logo}/>
             </div>
             <div className="site_name">
                <h2>News Headlines </h2>
             </div>
             <div className="clear"></div>
           </nav>
           <div className="site_description">
            <header>
              <h1>World Most Powerful News Headlines</h1>
              <h2>Read news from over 70 news sources accross the world!</h2>
            </header>
             <Button color='google plus' size='big'>
                 <Icon name='google plus' /> Login With Google Plus
            </Button>

           </div>
         </div>

        </div>
        <div className="lower_section" >
          <div className="container">
            <div className="info">
             <img alt="Site Name" src={site_logo}/>
             <p className="footer_text">Copyright <span>©2017</span></p>
             <div className="clear"></div>
             </div>
             <div className="social_icons">
             <Button circular color='facebook' icon='facebook' />
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />

             </div>


          </div>
        </div>

       </div>

}


export default HomeView;