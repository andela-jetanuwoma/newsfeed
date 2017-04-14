
import request from 'request';

class API{
   constructor(){
    this.linkString = "https://newsapi.org/v1/articles?&apiKey=213327409d384371851777e7c7f78dfe";
    this.apilink = "https://newsapi.org/v1/sources?language=en";
   	this.link = this.linkString;
   	this.num_query = 0;
   	this.result = [];
    this.hasError = false;
    this.errorMessage = "";

   }

   addQuery(type,value){

    	this.link += `&${type}=${value}`
   }

   clearQuery(){

      this.link = this.linkString;
   }

	getLink(){
		
		return this.link;
	}

  makeApiCall(){
      request(this.getLink(),(error,response,body)=>{
         if(response.statusCode === 200){
             this.result = JSON.parse(body);
             console.log(this.result);
         }else{
           this.errorMessage = error;
         }
      });
  }

	
}

export default new API();