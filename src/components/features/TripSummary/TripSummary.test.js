import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct name, cost and days', () => {
    const expectedName = 'NewZeland';
    const expectedCost = '420$';
    const expectedDays = 3;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);
  
    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);

  });

 
})