export const DESKTOP_VIEWPORT_WIDTH = 960;

export const IS_DESKTOP_VIEWPORT = window.innerWidth >= DESKTOP_VIEWPORT_WIDTH;

export const IS_MOBILE_VIEWPORT = window.innerWidth < DESKTOP_VIEWPORT_WIDTH;

export const ORIGIN = (window.location.hostname === 'localhost')
  ? 'https://develop.frontlinemasks.org'
  : window.location.origin;
