import news_logo from '../assets/images/matthew.png';



class newsContainer{
	constructor(){
      this.news = [];
	}

	add(title,description,meta,link,image=news_logo){
      this.news.push({href:link,header:title,description:description,meta:meta,image:image,color:"red"});
	}

	search(title){
      
	}

	get(){
		return this.news;
	}


}
export default newsContainer;