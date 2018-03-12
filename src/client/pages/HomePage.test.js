import React from 'react';
import { Home } from './HomePage';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

describe('Home', () => {
	let wrapper

	it('1. Renders the HomePage without crashing', () => {
		wrapper = shallow(<Home />);
		expect(wrapper).toHaveLength(1);
	})

	it('2. One <AppBar/> Component is present', () => {
		wrapper = shallow(<Home />);
		expect(wrapper.find(AppBar)).toHaveLength(1);
	})

	it('3. One <Drawer/> Component is present', () => {
		wrapper = shallow(<Home />);
		expect(wrapper.find(Drawer)).toHaveLength(1); 
	})

	it('4. <AppBar/> title should be RoadPiper Admin Panel', () => {
		wrapper = shallow(<Home />);
		expect(wrapper.find(AppBar).prop('title')).toBe('RoadPiper Admin Panel');
	})

	it('5. <Drawer/> Component has two Menu Items present', () => {
		wrapper = shallow(<Home />);
		expect(wrapper.find(Drawer).find(MenuItem)).toHaveLength(2);
	})

	it('6. Should match the snapshot', () => {
		wrapper = shallow(<Home />);
		expect(wrapper).toMatchSnapshot();
	})

	it('7. <AppBar/> should have button to open <Drawer/>', () => {
		wrapper = shallow(<Home />);
		expect(wrapper.find(AppBar).prop('onLeftIconButtonClick')).toBeTruthy;
	})

	it('8. <Drawer/> opens when Icon Button is clicked', () => {
		wrapper = shallow(<Home />);
		wrapper.find(AppBar).prop('onLeftIconButtonClick')('click');
		expect(wrapper.find(Drawer)).toHaveLength(1);
	})
})