import news_logo from '../assets/images/matthew.png';



class SourcesContainer{
	constructor(){
      this.sources = [];
	}

	add(id,name,description){
      this.sources.push({href:"/articles/"+id,header:name,description:description,title:name});
	}

	search(title){
      
	}

	get(){
		return this.sources;
	}


}
export default SourcesContainer;