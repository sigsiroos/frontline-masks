import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { wait } from '../utils';
import type { Entries, GlobalsEntry, ColorsEntry, LandingEntry, ColorEntry } from '../types';
import type { Sys } from 'contentful';

const contentfulLambdas = axios.create({
  baseURL: `${
    (window.location.hostname === 'localhost')
      ? 'https://develop.frontlinemasks.org'
      : window.location.origin
  }/.netlify/functions`,
});

function useDefaultContext() {
  const [globals, setGlobals] = useState(undefined as GlobalsEntry | undefined);
  const [colors, setColors] = useState(undefined as ColorsEntry | undefined)
  const [landing, setLanding] = useState(undefined as LandingEntry | undefined);

  useEffect(() => {
    (async () => {
      const getGlobalData = async () => (await (contentfulLambdas.get<GlobalsEntry>('globals'))).data;
      setGlobals(await wait(getGlobalData(), 420));
    })();

    (async () => {
      const getColorsData = async () => (await (contentfulLambdas.get<ColorsEntry>('colors'))).data;
      setColors(await wait(getColorsData(), 420));
    })();

    (async () => {
      const getLandingData = async () => (await (contentfulLambdas.get<LandingEntry>('landing'))).data;
      setLanding(await wait(getLandingData(), 420));
    })();
  }, []);

  const colorTuples = Object.entries(colors?.fields ?? {}) as Entries<NonNullable<typeof colors>['fields']>;

  const colorsById = colorTuples.reduce((acc, [colorName, colorEntry]) => {
    if (colorEntry?.sys?.id) acc[colorEntry.sys.id] = colorEntry;
    return acc;
  }, {} as Record<ColorEntry['sys']['id'], ColorEntry>);

  const getColorEntry = (id?: Sys['id']) => id ? colorsById[id] : undefined;

  return { globals, colors, landing, getColorEntry };
};

export const ContentfulContext = React.createContext({} as ReturnType<typeof useDefaultContext>);

export const ContentfulProvider: React.FC = function ContentfulProvider(props) {
  return <ContentfulContext.Provider value={useDefaultContext()} {...props} />;
};

export function useContentfulContext() {
  return useContext(ContentfulContext);
};
