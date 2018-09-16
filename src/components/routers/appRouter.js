import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Header } from '../navbar/navbar';
import PostPage from '../app/post/post';
import CommentsPage from '../app/comment/comment';

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/post' component={PostPage} exact={true} />
                <Route path='/comments' component={CommentsPage} exact={true} />
                <Redirect to="/post" from="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);