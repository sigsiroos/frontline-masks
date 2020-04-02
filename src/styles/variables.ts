/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import splash from './splash.jpg';

export const PAGE_MARGIN = '5rem';

export const BG_SPLASH = css`
  background-image: url(${splash});
  background-size: cover;
  background-position: center;
`;
