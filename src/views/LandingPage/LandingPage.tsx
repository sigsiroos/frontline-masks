import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import { LandingPageParallax } from './Parallax';

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import { sectionsFadeIn } from "./Parallax/startupAnimation";

/** @jsx jsx */
import { jsx } from '@emotion/core';

// const dashboardRoutes = [];

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

export default function LandingPage(props: any) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
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
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <br/>
      {/* <Footer /> */}
    </div>
  );
}
