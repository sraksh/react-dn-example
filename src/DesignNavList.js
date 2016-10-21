import React from 'react';

class DesignNavList extends React.Component {
render() {
	return (
	<div className="row">
		<div className="col-md-8">
			<ul id="sub-navigation-list-items">
				<li><a href="#">Top</a></li>
				<li><a href="#">Starred</a></li>
			</ul>
		</div>
	</div>
	);
}
}
export default DesignNavList;