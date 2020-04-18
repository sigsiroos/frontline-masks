import React, { AnchorHTMLAttributes } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import type { LinkProps } from 'react-router-dom';

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button, { ButtonTypeMap } from "@material-ui/core/Button";
import type { ButtonProps } from '@material-ui/core';

// core components

import buttonStyle from "assets/jss/material-kit-react/components/buttonStyle.js";
import type { ArrayElement } from "../../types";

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const makeComponentStyles = makeStyles((() => ({
  ...buttonStyle
})) as Parameters<typeof makeStyles>[0]);

const COLOR_OPTIONS = ["primary", "info", "success", "warning", "danger", "rose", "white", "facebook", "twitter", "google", "github", "transparent"] as const;

const SIZE_OPTIONS = ["sm", "lg"] as const;

type Props =  Omit<ButtonProps<ButtonTypeMap['defaultComponent'], {
  round?: boolean
  fullWidth?: boolean
  disabled?: boolean
  block?: boolean
  link?: boolean
  justIcon?: boolean
  simple?: boolean
}>, 'color' | 'size'>
  & {
    size?: ArrayElement<typeof SIZE_OPTIONS>
    color?: NonNullable<ButtonProps['color'] | ArrayElement<typeof COLOR_OPTIONS>>
    textColor?: string
  }
  & AnchorHTMLAttributes<any>
  & Partial<LinkProps>;

const RegularButton = React.forwardRef((props: Props, ref) => {
  const {
    color,
    round,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    textColor,
    ...rest
  } = props;

  const classes = makeComponentStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size ?? '']]: size,
    [classes[color ?? '']]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className ?? '']: className,
  });

  return <Button
    {...rest}
    css={css`${textColor ? `.MuiButton-label { color: ${textColor}; }` : ''}`}
    className={btnClasses}
    ref={ref as any}
  />;
});

export default RegularButton;
