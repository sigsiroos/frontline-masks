import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage";
import DonatePage from "views/DonatePage/DonatePage";
import RequestPage from "views/RequestPage/RequestPage";
import MissionPage from "views/MissionPage/MissionPage";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";
import { ContentfulProvider, useContentfulContext } from "./contexts/contentful";
import { HeartLoader } from "components/HeartLoader";
import { ScrollToTop } from "components/ScrollToTop";

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const hist = createBrowserHistory();

const Root: React.FC = function Root() {
  const { globals, landing } = useContentfulContext();

  if (!globals || !landing) {
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
      <ScrollToTop />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        css={css`
          position: relative;
          > div {
            position: absolute;
            width: 100%;
          }
        `}
      >
        {/* <Route path="/landing-page" component={LandingPage} /> */}
        {/* <Route path="/profile-page" component={ProfilePage} /> */}
        {/* <Route path="/login-page" component={LoginPage} /> */}
        {/* <Route path="/" component={Components} /> */}

        <Route path="/request" component={RequestPage} />
        <Route path="/donate" component={DonatePage} />
        <Route path="/mission" component={MissionPage} />
        <Route path="/" component={LandingPage} />
      </AnimatedSwitch>
    </Router>
  )
}

ReactDOM.render(
  <ContentfulProvider>
    <Root />
  </ContentfulProvider>,
  document.getElementById("root")
);
