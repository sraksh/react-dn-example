import React from 'react';
import news from './data/news';

import DesignNavList from './DesignNavList';
import DesignNewsList from './DesignNewsList';

class DesignNewsBlog extends React.Component {

  constructor(props) {
    super(props);
    this.sortByUpvote = this.sortByUpvote.bind(this);
    //this.sortByStar = this.sortByStar.bind(this);
    this.state = {
      topList: news
    }
  }

  sortByUpvote(id){
  	var topList = this.state.topList.slice(0).map(newsitems => Object.assign({}, newsitems));
  	var currentItem = topList.find(newsitems => newsitems.id === id);
  	currentItem.upvotes++;
  	this.setState({
  		topList
  	});
  }

  render(){
  	return (
  	<div className="container">
       <div className="row">
    		<div className="col-md-12">
            	<h1>{this.props.headerText}</h1>
            </div>
    	</div>

    	<DesignNavList/>

    	<DesignNewsList
    	topList={this.state.topList}
    	sortByUpvote={this.sortByUpvote} />
    	
    </div>
	);
  }
}
export default DesignNewsBlog;