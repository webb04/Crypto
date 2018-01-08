import React from 'react';
import { shallow } from 'enzyme';
import AnimatedNumber from './AnimatedNumber';

it('displays number (initial countdown) and currency correctly', () => {
  const wrapper = shallow(<AnimatedNumber number={2000} currency={true} decimal={false}/>);
  const number = "<span>$1,500</span>";
  expect(wrapper.html()).toEqual(number);
});

it('renders decimal places', () => {
  const wrapper = shallow(<AnimatedNumber number={1000} decimal={true}/>);
  const number = "<span>750.00</span>";
  expect(wrapper.html()).toEqual(number);
});
