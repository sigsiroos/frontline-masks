import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItemUntyped from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { useContentfulContext } from '../../../lib/contentful';
import { parallaxFadeIn, parallaxTextSlideIn } from './startupAnimation';

/** @jsx jsx */
import { jsx } from '@emotion/core'

const GridItem = GridItemUntyped as React.FC<any>;

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

export const LandingPageParallax: React.FC = function LandingPageParallax() {
  const { landingData } = useContentfulContext();

  const classes = useStyles();

  return (
    <Parallax filter={window.innerWidth < 960} image={landingData?.fields.background.fields.file.url} css={parallaxFadeIn}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} css={parallaxTextSlideIn}>
            <h1 className={classes.title}>{landingData?.fields.title}</h1>
            <h4>
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
              {landingData?.fields.tagline}
            </h4>
            {/* <br />
            <Button
              color="danger"
              size="lg"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-play" />
              Watch video
            </Button> */}
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  )
};
