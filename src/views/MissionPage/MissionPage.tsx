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

import ProductSection from "./Sections/ProductSection";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { LandingPageParallax } from './Parallax';
import { IS_MOBILE_VIEWPORT } from '../../utils';

/** @jsx jsx */
import { jsx } from '@emotion/core';

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

export default function MissionPage(props: any) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
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
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <br/>
      <Footer />
    </div>
  );
}
