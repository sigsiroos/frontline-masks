import React, { useEffect, useState     , useContext } from 'react';
import axios from 'axios';
import { wait } from '../utils';
import type { GlobalDataEntry, LandingDataEntry } from '../types';

const contentfulLambdas = axios.create({
  baseURL: `${
    (window.location.hostname === 'localhost')
      ? process.env.REACT_APP_DOMAIN
      : window.location.origin
  }/.netlify/functions`,
});

function useDefaultContext() {
  const [globals, setGlobals] = useState(undefined as GlobalDataEntry | undefined);
  const [landing, setLanding] = useState(undefined as LandingDataEntry | undefined);


  useEffect(() => {
    (async () => {
      const getGlobalData = async () => (await (contentfulLambdas.get<GlobalDataEntry>('globals'))).data;
      setGlobals(await wait(getGlobalData(), 420));
    })();

    (async () => {
      const getLandingData = async () => (await (contentfulLambdas.get<LandingDataEntry>('landing'))).data;
      setLanding(await wait(getLandingData(), 420));
    })();
  }, []);

  return { globals, landing };
};

export const ContentfulContext = React.createContext({} as ReturnType<typeof useDefaultContext>);

export const ContentfulProvider: React.FC = function ContentfulProvider(props) {
  return <ContentfulContext.Provider value={useDefaultContext()} {...props} />;
};

export function useContentfulContext() {
  return useContext(ContentfulContext);
};
