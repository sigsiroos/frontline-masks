import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import HeaderLinks from "components/Header/HeaderLinks";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import { LandingPageParallax } from './Parallax';

// Sections for this page
import ActionsSection from "./Sections/ActionsSection"
import SponsorsSection from "./Sections/SponsorsSection";
import { sectionsFadeIn } from "./Parallax/startupAnimation";

import { useContentfulContext } from '../../lib/contentful';
import { IS_MOBILE_VIEWPORT } from '../../utils';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// const dashboardRoutes = [];

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

export default function LandingPage(props: any) {
  const classes = useStyles();
  const { ...rest } = props;

  const { landing } = useContentfulContext();

  return (
    <div css={css`max-width: 100%; overflow-x: hidden;`}>
      <Header
        color={IS_MOBILE_VIEWPORT ? 'white' : 'transparent'}
        // routes={dashboardRoutes}
        brand="FrontlineMasks"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 88,
          color: "white"
        }}
        {...rest}
      />
      <LandingPageParallax />
      <div className={classNames(classes.main, classes.mainRaised)} css={sectionsFadeIn}>
        <div className={classes.container}>
          <ActionsSection />
          {landing?.fields.sponsors?.length ? <SponsorsSection /> : undefined}
          {/* <WorkSection /> */}
        </div>
      </div>
      <br/>
      <Footer />
    </div>
  );
};
