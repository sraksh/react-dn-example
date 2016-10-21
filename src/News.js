import React from 'react';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.giveUpvote = this.giveUpvote.bind(this);
    this.giveRating = this.giveRating.bind(this);
    this.removeRating = this.removeRating.bind(this);
  }

  giveUpvote(){
    this.props.sortByUpvote(this.props.id);
  }

  giveRating(){
    this.props.rateMe(this.props.id);
  }

  removeRating(){
    this.props.unrateMe(this.props.id);
  }

  showStarredList(){
    this.props.sortByStar(this.props.id);
  }
  
  render() {
    return (
      <li className="list-story-grouper">
          <div className="list-story-grouper list-story-upvote-grouper">
              <button className="btn-story-upvote" onClick={this.giveUpvote}>
                  <svg aria-label="up-arrow" className="upvote-up-arrow" height="7" id="svg-up-arrow" role="img" version="1.1" viewBox="0 0 11 7" width="11">
                      <path d="m.202 5.715c-.367.417-.217.755.329.755h9.438c.549 0 .702-.33.338-.742l-4.41-4.985c-.363-.41-.947-.412-1.322.013l-4.373 4.96"></path>
                  </svg>
                  <span className="btn-story-upvote-number unvoted-number">{this.props.upvotes}</span>
              </button>
          </div>
          <div className="list-story-grouper list-story-content-grouper">
              {this.props.story}
          </div>
          <div className="list-story-grouper list-story-star-grouper">
              <a href="#" className="story-star-button">
                  <span onClick={this.props.isStarred ? this.removeRating : this.giveRating}
                  className={this.props.isStarred ? "glyphicon glyphicon-star" : "glyphicon glyphicon-star-empty"} aria-hidden="true">
                  </span>
              </a>
          </div>
      </li>
    );
  }
}

export default News;
