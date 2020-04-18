import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { useContentfulContext } from '../../../contexts/contentful';

/** @jsx jsx */
import { jsx } from '@emotion/core'

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

export const LandingPageParallax: React.FC = function LandingPageParallax() {
  const { landing } = useContentfulContext();

  const classes = useStyles();

  return (
    <Parallax filter={window.innerWidth < 960} image={landing?.fields.background.fields.file.url}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>Submit your PPE needs here</h1>
            <h4>
              We are making every effort to fulfill donation requests.
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
