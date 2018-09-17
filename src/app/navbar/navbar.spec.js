import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './navbar';

describe('<Header />', () => {
    it('should have 2 elements with route as - \'/post/hot\'', () => {
        const wrapper = shallow(<Header />);
        const actual = wrapper.findWhere(n => n.prop('to') === '/post/hot').length;
        const expected = 2;

        expect(actual).toEqual(expected);
    });

    it('should have 4 \'NavLinks\'', () => {
        const wrapper = shallow(<Header />);
        const actual = wrapper.find('NavLink').length;
        const expected = 4;

        expect(actual).toEqual(expected);
    });
});
