import React from 'react';
import { mount } from 'enzyme';
import PostItem from './postItem';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<PostItem />', () => {
    it('PostItem - allows us to get props', () => {
        let data = {
            title: 'Batman',
            author: 'Bruce Wayne'
        };
        const wrapper = mount(
            <Router>
                <PostItem data={data} />
            </Router>
        );
        expect(wrapper.find('PostItem').props().data.title).toEqual('Batman');
    });
});
