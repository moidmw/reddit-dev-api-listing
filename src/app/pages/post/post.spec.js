import React from 'react';
import { shallow} from 'enzyme';
import PostWrapper from './post';

describe('<PostWrapper />', () => {
    it('should have \'Route\' element', () => {
        const wrapper = shallow(<PostWrapper />);
        const actual = wrapper.find('Route').length;
        const expected = 1;

        expect(actual).toEqual(expected);
    });
});
