import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Header } from '../navbar/navbar';

import CommentsPage from '../app/comment/comment';
import NotFound from '../shared/404/404';
import PostIndex from '../app/post/postIndex';

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/post' component={PostIndex} />
                <Route path='/comments' component={CommentsPage} exact={true} />
                <Redirect to="/post/hot" from="/" />
                <Route to="/error" component={NotFound} />
            </Switch>
        </Fragment>
    </BrowserRouter>
);