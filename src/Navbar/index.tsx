import React from 'react';
import { PAGE_MARGIN } from '../styles';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Navbar() {
  return (
    <nav css={css`
      position: fixed;
      width: 100%;
      display: flex;
      align-items: center;
      height: 3rem;
      padding: .5rem ${PAGE_MARGIN};
      a {
        color: white;
        text-decoration: none;
      }
    `}>
      <a href="/" css={css`font-size: 1.5rem`}>Logo</a>
      <ul css={css`
        display: flex;
        list-style: none;
        padding-left: 1rem;
        > * { padding: .5rem }
      `}>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
