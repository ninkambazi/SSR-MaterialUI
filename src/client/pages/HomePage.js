import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.handleToggle = this.handleToggle.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleToggle() {
		this.setState({
			open: !this.state.open
		});	
	} 

	handleClose() {
		this.setState({
			open: false
		});
	}	

	render() {
		return (
			<div>
				<div>
					<AppBar
					    title="RoadPiper Admin Panel"
					    onLeftIconButtonClick={this.handleToggle}
					 />
					 <Drawer
					 	docked={false}
					 	open={this.state.open}
					 	onRequestChange={(open) => this.setState({open})}
					 >
					 	<MenuItem>Menu Item 1</MenuItem>
					 	<MenuItem>Menu Item 2</MenuItem>
					 </Drawer>
				</div> 
			</div>
		);
	}
};

export default {
	component: Home
};