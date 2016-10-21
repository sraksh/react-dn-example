import React from 'react';
import News from './News';

class DesignNewsList extends React.Component {
  render() {
  	var sortedItems=this.props.topList.sort(function(a, b) {
    return (b.upvotes) - (a.upvotes);
	});
  	var news=sortedItems.map(newsitems => {
  	return (
  		<News
  			key={newsitems.id}
  			sortByUpvote={this.props.sortByUpvote}
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