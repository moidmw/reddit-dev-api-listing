import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Header } from '../navbar/navbar';
import PostPage from '../app/post/post';
import CommentsPage from '../app/comment/comment';
import NotFound from '../shared/404/404';

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/:type' component={PostPage} />
                <Route path='/comments' component={CommentsPage} exact={true} />
                <Redirect to="/hot" from="/" />
                <Route to="/error" component={NotFound} />
            </Switch>
        </Fragment>
    </BrowserRouter>
);