import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { useContentfulContext } from '../../../lib/contentful';
import { IS_MOBILE_VIEWPORT } from 'utils';

/** @jsx jsx */
import { jsx } from '@emotion/core'

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

export const LandingPageParallax: React.FC = function LandingPageParallax() {
  const { landing } = useContentfulContext();

  const classes = useStyles();

  return (
    <Parallax filter={IS_MOBILE_VIEWPORT} image={landing?.fields.background.fields.file.url}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>Mission</h1>
            <h4>
              We are working to maximize the amount of masks and protective gear that our healthcare workers are receiving and to get a hold on the price-gouging happening within in the marketplace to secure more favorable pricing through our network
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
  );
};
