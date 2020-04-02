/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import { BG_SPLASH } from './variables';
export * from './variables';

export const GlobalStyles = <Global
  styles={css`
    * { box-sizing: border-box }

    html, body {
      font-family: 'Noto Sans', sans-serif;
      ${BG_SPLASH};
    }
  `}
/>;
