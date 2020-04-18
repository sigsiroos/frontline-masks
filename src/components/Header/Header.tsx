import React from "react";
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import { useContentfulContext } from "contexts/contentful";

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

const Header: React.FC<{
  color: "primary" | "info" | "success" | "warning" | "danger" | "transparent" | "white" | "rose" | "dark",
  rightLinks?: JSX.Element | ((args: {
    headerChangedFromScrolling: boolean
  }) => JSX.Element),
  leftLinks?: JSX.Element,
  brand?: string,
  fixed?: boolean,
  absolute?: boolean,
  /**
   *  this will cause the sidebar to change the color from
   *  props.color (see above) to changeColorOnScroll.color
   *  when the window.pageYOffset is heigher or equal to
   *  changeColorOnScroll.height and then when it is smaller than
   *  changeColorOnScroll.height change it back to
   *  props.color (see above)
   */
  changeColorOnScroll: {
    height: number,
    color: "primary" | "info" | "success" | "warning" | "danger" | "transparent" | "white" | "rose" | "dark"
  },
}> = props => {
  const { globals } = useContentfulContext();

  const [headerChangedFromScrolling, setHeaderChangedFromScrolling] = React.useState(false);

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    const headerChangedClass = 'header-changed';
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color], headerChangedClass);
      setHeaderChangedFromScrolling(true);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color], headerChangedClass);
      setHeaderChangedFromScrolling(false);
    }
  };

  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });

  const brandComponent = (
    <Button
      className={classes.title}
      component={Link}
      to="/"
      css={css`
        padding: 0 !important;
        height: 60px;
        display: flex;
        * { height: 100%; }
      `}
      >
      <img
        src={globals?.fields.navbarLogo?.fields.file.url}
        alt="FrontlineMasks"
      />
      {/* {brand} */}
    </Button>
  );

  const rightLinksRendered = (typeof rightLinks === 'function')
      ? rightLinks({ headerChangedFromScrolling })
      : rightLinks;

  return (
    <AppBar className={appBarClasses} css={css`padding: .25rem 0 !important;`}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinksRendered}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinksRendered}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

(Header as any).defaultProp = {
  color: "white"
};

(Header as any).propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default Header;
