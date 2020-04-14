/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Button from "components/CustomButtons/Button";
import { Link as RouterLink } from 'react-router-dom';

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import { useContentfulContext } from "lib/contentful";

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

const Footer: React.FC<{
  whiteFont?: boolean
}> = function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  const { globals } = useContentfulContext();

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link component={RouterLink} to="/mission" className={classes.block}>
                About
              </Link>
              {/* <a
                href="https://www.creative-tim.com/?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Creative Tim
              </a> */}
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="mailto:frontlinemasks.org@gmail.com"
                className={classes.block}
              >
                Contact
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Button
                color="transparent"
                href={globals?.fields.instagram}
                target="_blank"
                size='sm'
                className={classes.navLink}
              >
                <i className={classes.socialIcons + " fab fa-instagram"} />
              </Button>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {new Date().getFullYear()} FrontlineMasks
          {/* &copy; {new Date().getFullYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://www.creative-tim.com?ref=mkr-footer"
            className={aClasses}
            target="_blank"
          >
            Creative Tim
          </a>{" "}
          for a better web. */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
