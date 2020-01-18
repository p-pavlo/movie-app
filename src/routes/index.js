import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// constants
import * as C from '../constants';
////////////////////////////////////////////////////////////////////////////////////////////////////

const HomePage = lazy(() => import(/* webpackChunkName: 'HomePage' */ '../pages/home'));
const MoviePage = lazy(() => import(/* webpackChunkName: 'HomePage' */ '../pages/movie'));

export default () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        {/* <Layout> // TODO import this! */}
          <Switch>
            <Route path={C.ROUTE_HOME_PAGE} exact component={HomePage} />
            <Route path={C.ROUTE_MOVIE_PAGE} exact component={MoviePage} />
            <RedirectTo redirect={C.ROUTE_HOME_PAGE} />
          </Switch>
        {/* </Layout> */}
      </Switch>
    </Suspense>
  );
};

const RedirectTo = props => <Redirect to={props.redirect} />;