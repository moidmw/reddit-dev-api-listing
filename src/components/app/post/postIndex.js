import React, { Component } from 'react';
import {Route} from 'react-router';
import PostPage from './post';

class postIndex extends Component {
    render() {
        console.log('PostPage', this.props);
        return (
            <div>
                <Route path='/post/:type' component={PostPage} />
            </div>
        );
    }
}

export default postIndex;