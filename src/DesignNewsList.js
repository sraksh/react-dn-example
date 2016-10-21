import React from 'react';
import News from './News';

class DesignNewsList extends React.Component {
  render() {
   return (
  	<div className="row">
            <div className="col-md-8">
                <ul className="design-news-items">
                    <News/>
                </ul>
            </div>
        </div>
	);
	}
}
export default DesignNewsList;