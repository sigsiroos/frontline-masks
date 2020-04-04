import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import { ContentfulProvider, useContentfulContext } from "./lib/contentful";
import { HeartLoader } from "components/HeartLoader";

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

var hist = createBrowserHistory();

const Root: React.FC = function Root() {
  const { landingData } = useContentfulContext();

  if (!landingData) {
    return (
      <div css={css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(2);
      `}>
        <HeartLoader />
      </div>
    );
  }

  return (
    <Router history={hist}>
      <Switch>
        {/* <Route path="/landing-page" component={LandingPage} /> */}
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        {/* <Route path="/" component={Components} /> */}
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <ContentfulProvider>
    <Root />
  </ContentfulProvider>,
  document.getElementById("root")
);
