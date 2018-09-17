import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Header } from '../app/navbar/navbar';

import CommentsPage from '../app/pages/comment/commentPage';
import NotFound from '../app/shared/404/404';
import PostIndex from '../app/pages/post/post';

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            <Switch>
                <Route path="/post" component={PostIndex} />
                <Route path="/comments" component={CommentsPage} exact={true} />
                <Redirect to="/post/hot" from="/" />
                <Route to="/error" component={NotFound} />
            </Switch>
        </Fragment>
    </BrowserRouter>
);
