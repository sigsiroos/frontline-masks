/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { useContentfulContext } from "contexts/contentful";

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { DESKTOP_VIEWPORT_WIDTH, IS_DESKTOP_VIEWPORT } from "utils";

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

const HeaderLinks: React.FC<{
  headerChangedFromScrolling?: boolean
}> = props => {
  const classes = useStyles();

  const { globals, getColorEntry } = useContentfulContext();

  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          component={Link}
          to="/request"
          color={props.headerChangedFromScrolling ? 'transparent' : IS_DESKTOP_VIEWPORT ? 'white' : 'transparent'}
          className={classes.navLink}
          textColor={getColorEntry(globals?.fields.colors.fields.orange.sys.id)?.fields?.code}
          css={props.headerChangedFromScrolling ? undefined : css`
            @media (min-width: ${DESKTOP_VIEWPORT_WIDTH}px) {
              &:hover { background: white !important; }
              .header-changed & { box-shadow: none; }
            }
          `}
        >
          I Need PPE
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          // component={Link}
          // to="/donate"
          href="https://www.gofundme.com/f/tztm7-ppe-for-the-frontlines"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          Donate
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          component={Link}
          to="/mission"
          color="transparent"
          className={classes.navLink}
        >
          Mission
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href={globals?.fields.instagram}
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default HeaderLinks;
