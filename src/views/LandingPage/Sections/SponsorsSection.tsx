import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import { useContentfulContext } from "lib/contentful";

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

export default function SponsorsSection() {
  const { landing } = useContentfulContext();

  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    // classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Sponsored by</h2>
      <div>
        <GridContainer css={css`justify-content: center;`}>
          {landing?.fields.sponsors.map(sponsor => (
            <GridItem xs={12} sm={12} md={4} component="a" href={sponsor.fields.website} target="_blank" key={sponsor.sys.id}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img
                    src={sponsor.fields.logo.fields.file.url}
                    alt="..."
                    className={imageClasses}
                    css={css`
                      ${sponsor.fields.backgroundColor ? `background-color: ${sponsor.fields.backgroundColor};` : ''}
                      ${sponsor.fields.logoPadding ? `padding: ${sponsor.fields.logoPadding};` : ''}
                    `}
                  />
                </GridItem>
                {/* <h4 className={classes.cardTitle}>
                  {sponsor.fields.name}
                  <br />
                  <small className={classes.smallTitle}>Model</small>
                </h4> */}
                {/* <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members. You
                    can give more details about what they do. Feel free to add
                    some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody> */}
                {/* <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter> */}
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
