import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate proper address', () => {
    const expectedId= 'abc';
    const expectedAddress = '/trip/abc';
    const expectedTags =[];
    
    const component = shallow(<TripSummary id={expectedId} tags={expectedTags}/>);
    
    expect(component.find('.link').prop('to')).toEqual(expectedAddress);
  })
  it('has proper src and alt', () => {
    const expectedSrc = 'someImage';
    const expectedAlt = 'someAlt';
    const expectedTags =["tag1", "tag2", "tag3"];

    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={expectedTags}/>);
    
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt); 
  })
  it('should render correct name, cost and days', () => {
    const expectedName = 'NewZeland';
    const expectedCost = '420$';
    const expectedDays = 3;
    const expectedTags =["tag1", "tag2", "tag3"];

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={expectedTags}/>);
    const renderedName = component.find('.title').text();

    expect(renderedName).toEqual(expectedName);
    expect(component.find('.tripLenght').text()).toEqual('3 days');
    expect(component.find('.tripCost').text()).toEqual('from 420$');
  });
 it('should render with crashing if missing any props', () => {
  
   expect(() => shallow(<TripSummary />)).toThrow(); 
 })
 it('...', () => {
   const expectedTags = ["tag1", "tag2", "tag3"];

   const component = shallow(<TripSummary tags={expectedTags}/>);

   
 })
})