import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import API from '../configs/API';
import request from 'request';
import SourcesContainer from '../configs/SourcesContainer';
var AppActions = {

	getNews:( ...source )=> {
		AppDispatcher.dispatch({
			eventName: AppConstants.NEW_ITEM,
			newItem: source // example data
		});
	},

	getSources:()=>{
      console.log("i am here");
       API.clearQuery();
       request(API.apilink,(error,response,body)=>{
       	   if(response.statusCode === 200){
       	      body = JSON.parse(body);
            let feedSources = new SourcesContainer();
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

module.exports = AppActions;