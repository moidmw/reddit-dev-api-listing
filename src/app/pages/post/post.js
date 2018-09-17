import React, { Component } from 'react';
import {Route} from 'react-router';
import PostPage from './postPage';

class PostWrapper extends Component {
    render() {
        console.log('PostPage', this.props);
        return (
            <div>
                <Route path='/post/:type' component={PostPage} />
            </div>
        );
    }
}

export default PostWrapper;