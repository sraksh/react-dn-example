import React from 'react';
import News from './News';

class DesignNewsList extends React.Component {
	starredArray(id){
		var len = this.props.starList.length - 1;
		for(var i = len; i>= 0;i--){
			if(this.props.starList[i] === id)
				return false;
		}
		return true;
	}

  render() {
  	var sortedItems=this.props.topList.sort(function(a, b) {
    return (b.upvotes) - (a.upvotes);
	});
  	var news=sortedItems.filter(item => this.starredArray(item.id)).map(newsitems => {
  	return (
  		<News
  			key={newsitems.id}
  			sortByUpvote={this.props.sortByUpvote}
  			rateMe={this.props.rateMe}
  			unrateMe={this.props.unrateMe}
  			sortByStar={this.props.sortByStar}
  			{...newsitems}
  		/>
  		);
  	});

   return (
  	<div className="row">
            <div className="col-md-8">
                <ul className="design-news-items">
                    {news}
                </ul>
            </div>
        </div>
	);
	}
}
export default DesignNewsList;