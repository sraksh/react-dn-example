import React from 'react';
import news from './data/news';

import DesignNavList from './DesignNavList';
import DesignNewsList from './DesignNewsList';

class DesignNewsBlog extends React.Component {
  /*constructor(props) {
    super(props);
    this.addToStarred = this.addToStarred.bind(this);
    this.removeFromStarred = this.removeFromStarred.bind(this);
    this.state = {
      topList: news,
      starredList: []
    }
  }*/
  render(){
  	return (
  	<div className="container">
       <div className="row">
    		<div className="col-md-12">
            	<h1>Designer News</h1>
            </div>
    	</div>

    	<DesignNavList/>
    	<DesignNewsList/>
    </div>
	);
  }
}

export default DesignNewsBlog;