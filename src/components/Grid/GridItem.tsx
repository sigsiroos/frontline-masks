import React, { ComponentProps } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import type { GridProps } from '@material-ui/core';

const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
};

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

const GridItem: React.FC<ComponentProps<typeof Grid> & { [key: string]: any, component?: React.ElementType }> = function GridItem(props) {
  const classes = useStyles();
  const { className, ...rest } = props;
  return <Grid item {...rest} className={classes.grid + " " + className} />;
}

export default GridItem;

GridItem.defaultProps = {
  className: ""
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
