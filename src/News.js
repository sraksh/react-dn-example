import React from 'react';

class News extends React.Component {
  
  render() {
    return (
      <li className="list-story-grouper">
          <div className="list-story-grouper list-story-upvote-grouper">
              <button className="btn-story-upvote">
                  <svg aria-label="up-arrow" className="upvote-up-arrow" height="7" id="svg-up-arrow" role="img" version="1.1" viewBox="0 0 11 7" width="11">
                      <path d="m.202 5.715c-.367.417-.217.755.329.755h9.438c.549 0 .702-.33.338-.742l-4.41-4.985c-.363-.41-.947-.412-1.322.013l-4.373 4.96"></path>
                  </svg>
                  <span className="btn-story-upvote-number unvoted-number">26</span>
              </button>
          </div>
          <div className="list-story-grouper list-story-content-grouper">
              Join Netflix and HTC Creative Labs at Design on the Rocks | Thursday Oct 27 | @ The Piranha Shop, Seattle WA
          </div>
          <div className="list-story-grouper list-story-star-grouper">
              <a href="#" className="story-star-button">
                  <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
              </a>
          </div>
      </li>
    );
  }
}

export default News;
