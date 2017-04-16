import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import API from '../models/API';
import request from 'request';
import SourcesContainer from '../models/SourcesContainer';
import NewsContainer from '../models/newsContainer';
let AppActions = {

	getNews:( ...sources )=> {
  
   
     sources.forEach(source=>{
       API.clearQuery();
     API.addQuery("source",source);
     request(API.getLink(),(error,response,body)=>{
        let newsfeeds = new NewsContainer();
        body = JSON.parse(body);
       if(response.statusCode === 200){
        let articles = body.articles;

        articles.forEach(article=>{
          newsfeeds.add(article.title,article.description,article.author,article.url,article.urlToImage);
        });
       
          AppDispatcher.dispatch({
      eventName: AppConstants.GET_NEWS,
      news: newsfeeds.get()// example data
    });

       }

    
     });


     });

		
	},

	getSources:()=>{
      
       API.clearQuery();
       let feedSources = new SourcesContainer();
       request(API.apilink,(error,response,body)=>{
       	   if(response.statusCode === 200){
       	      body = JSON.parse(body);
            
       	   let sources = body.sources;

       	   sources.forEach(source=>{
                feedSources.add(source.id,source.name,source.description);
       	   });
            
             
              AppDispatcher.dispatch({

        eventName: AppConstants.GET_SOURCES,
        newItem: feedSources.get() // example data

       });
            

       	   }
       });

     
	}
};

export default AppActions;