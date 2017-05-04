import React from 'react';
import news from './data/news';

import DesignNavList from './DesignNavList';
import DesignNewsList from './DesignNewsList';

class DesignNewsBlog extends React.Component {

  constructor(props) {
    super(props);
    this.sortByUpvote = this.sortByUpvote.bind(this);
    this.sortByStar = this.sortByStar.bind(this);
    this.rateMe = this.rateMe.bind(this);
    this.unrateMe = this.unrateMe.bind(this);
    this.showTopList = this.showTopList.bind(this);

    this.state = {
      topList: news,
      starList: [],
      isStarred: ""
    }
  }

  showTopList(){
    var topList = this.state.topList.slice(0).map(newsitems => Object.assign({}, newsitems));

    this.setState({
      topList,
      starList: []
    });
  }

  sortByUpvote(id){
    var topList = this.state.topList.slice(0).map(newsitems => Object.assign({}, newsitems));
    
    var currentItem = topList.find(newsitems => newsitems.id === id);
    currentItem.upvotes++;
    
    this.setState({
      topList
    });
  }

  rateMe(id){
    var topList = this.state.topList.slice(0).map(newsitems => Object.assign({}, newsitems));
    var currentItem = topList.find(newsitems => newsitems.id === id);
    currentItem.isStarred = true;

    this.setState({
      topList
    });

  }

  unrateMe(id){
    var topList = this.state.topList.slice(0).map(newsitems => Object.assign({}, newsitems));
    var currentItem = topList.find(newsitems => newsitems.id === id);
  
  currentItem.isStarred = false;
    
    this.setState({
      topList
    });
  }

  sortByStar(){
    var topList = this.state.topList.slice(0).map(newsitems => Object.assign({}, newsitems));
    var starList = this.state.starList.slice(0).map(item => Object.assign({}, item));
    
    topList.forEach(itemStarred => {
      if(!itemStarred.isStarred){
      starList.push(itemStarred.id);
    }
    });
    //console.log(starList)
    this.setState({
      topList,
      starList
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

      <DesignNavList sortByStar={this.sortByStar} topList={this.state.topList} showTopList={this.showTopList}/>

      <DesignNewsList
      topList={this.state.topList}
      sortByUpvote={this.sortByUpvote} 
      rateMe={this.rateMe} 

      unrateMe={this.unrateMe}
      starList={this.state.starList} />
    </div>
  );
  }
}
export default DesignNewsBlog;