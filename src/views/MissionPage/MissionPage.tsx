import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import { LandingPageParallax } from './Parallax';

/** @jsx jsx */
import { jsx } from '@emotion/core';

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

export default function MissionPage(props: any) {
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
    </div>
  );
}