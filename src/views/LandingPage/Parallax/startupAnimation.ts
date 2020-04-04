import { css, keyframes } from '@emotion/core';

const parallaxBackgroundFadeInKeyframes = keyframes`
  0% {
    transform: scale(1.25);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeInLapse = .69;

export const parallaxFadeIn = css`
  animation: ${parallaxBackgroundFadeInKeyframes} ${fadeInLapse}s;
`;

const parallaxTextSlideInKeyframes = keyframes`
  0% {
    transform: translateX(-22%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const parallaxTextSlideIn = css`
  animation-fill-mode: both;
  animation-duration: ${fadeInLapse / 2}s;
  animation-delay: ${fadeInLapse * (2 /3 )}s;
  animation-name: ${parallaxBackgroundFadeInKeyframes};
  @media (min-width: 960px) {
    animation-duration: ${fadeInLapse}s;
    animation-delay: ${fadeInLapse / 2}s;
    animation-name: ${parallaxTextSlideInKeyframes};
  }
`;

const sectionsFadeInKeyframes = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

export const sectionsFadeIn = css`
  animation-fill-mode: both;
  animation-delay: ${2 * fadeInLapse}s;
  animation-name: ${sectionsFadeInKeyframes};
  animation-duration: ${fadeInLapse}s;
`;
