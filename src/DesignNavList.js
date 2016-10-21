import React from 'react';

class DesignNavList extends React.Component {
	constructor(props) {
    super(props);
    this.sortTopList = this.sortTopList.bind(this);
    this.sortStarList = this.sortStarList.bind(this);
  }

  sortTopList(){
    this.props.showTopList(this.props.id);
  }

  sortStarList(){
    this.props.sortByStar(this.props.id);
  }

	render() {
		return (
		<div className="row">
			<div className="col-md-8">
				<ul id="sub-navigation-list-items">
					<li><a href="#" onClick={this.sortTopList}> Top </a></li>
					<li><a href="#" onClick={this.sortStarList}> Starred </a></li>
				</ul>
			</div>
		</div>
		);
	}
}
export default DesignNavList;