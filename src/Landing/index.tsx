import React from 'react';
import { PAGE_MARGIN, BG_SPLASH } from '../styles';
import { DESC_KEYFRAMES } from './styles';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Landing() {
  return (
    <header
      id='landing'
      css={css`
        ${BG_SPLASH};
        height: 100vh;
        padding: ${PAGE_MARGIN};
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        align-items: center;
      `}
    >
      <div css={css`
        grid-row: 2 / -1;
        color: white;
        animation: ${DESC_KEYFRAMES} .69s both 1s;
      `}>
        <h1 css={css({ margin: 0 })}>
          Medical landing page
        </h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae iste.
        </p>
      </div>
    </header>
  );
}

export default Landing;
