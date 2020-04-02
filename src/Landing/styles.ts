/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

export const DESC_KEYFRAMES = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
