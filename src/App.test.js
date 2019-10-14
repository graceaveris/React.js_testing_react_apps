import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from './App';
import List from './List';
import ListItem from './ListItem';



//SHALLOW TESTS or 'unit tests' - Jest + enzyme

// this is a checking that our app loads
describe ('App component - load test', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
});

//we describe which component we are going to test
describe('App component - units tests - jest/enzyme', () => {
    
    // unit test, checking count of 0 displaying on first render
	it('starts count at 2', () => {
		const wrapper = shallow(<App />);
		const text = wrapper.find('p').text();
		expect(text).toEqual('Total Items: 2')
	});
    
	// unit test, testing user interaction by simulating a click
	it('increments count by 1 on click', () => {
		const wrapper = shallow(<App />);

		const input = wrapper.find('input')
		input.simulate('change', {target: {value: 'test'} })
		
		const button = wrapper.find('button.main-btn');
		button.simulate('click');
		
		const text = wrapper.find('p').text();
		expect(text).toEqual('Total Items: 3');
	});
    
    // snapshot, snapshot of your component tree is created first run
    // then if it changes during dev you will be alerted
    // note: select u during test fail to update the snapshot
	it('matches snapshot', () => {
		const tree = renderer.create(<App />).toJSON();
		expect(tree).toMatchSnapshot();
	}); 

});


// MOCK TEST
// we create a fake function to test flow, or check for function calls 

	//define empty mock function to simulate the click 
	const mockClick = jest.fn();

	describe('ListItem component - mock test - jest/enzyme', () => {
		it('button click should fire function', () => {
			const component = shallow(<ListItem onClick={mockClick} />);

			const button = component.find('button.smallbtn');
			button.simulate('click');
			expect(mockClick).toHaveBeenCalled();
		});
	}); 


// TEST w REACT-TESING-LIBRARY

// INTEGRATION TEST
// using react-testing-lib to ckeck two components working together
describe('List component - integration test - react testing lib', () => {
	test('It renders shopping list items with delete buttons', () => {
		
		//we add our dummy data
		const item1 = {
			name: 'potato',
			key: 1
		}

		const item2 = {
			name: 'cheese',
			key: 2
		}
		//arrange data as props in correct format for component
		const props = {
			items:[ item1, item2 ]
		}
	
    //render data
   const { getByText, getAllByText } = render(<List {...props} />)

    //assert results
    const firstListItemNode = getByText(item1.name)
    const secondListItemNode = getByText(item2.name)
    const buttonCount = getAllByText('delete').length

    expect(firstListItemNode).toBeDefined()
    expect(firstListItemNode).toBeDefined()
    expect(buttonCount).toBe(2)

	})
})


// TERMINOLOGY
// expect is an assertion
// .toEqual is a matcher
// shallow means its only testing component provided, ignoring children!
// unit test - tests one function or component - shallow()
// integration test - testing a react component tree - mount()

