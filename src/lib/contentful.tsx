import React, { useEffect, useState, useContext } from 'react';
import { wait } from '../utils';
import type { LandingData, GlobalData } from '../types';

function useDefaultContext() {
  const [globalData, setGlobalData] = useState(undefined as GlobalData | undefined);
  const [landingData, setLandingData] = useState(undefined as LandingData | undefined);

  useEffect(() => {
    (async () => {
      const getGlobalDataJson = async () => {
        const globalDataResponse = await fetch(`${process.env.REACT_APP_DOMAIN}/.netlify/functions/globals`);
        const globalDataJson: GlobalData = await globalDataResponse.json();
        return globalDataJson;
      }

      setGlobalData(await wait(getGlobalDataJson(), 420));
    })();

    (async () => {
      const getLandingDataJson = async () => {
        const landingDataResponse = await fetch(`${process.env.REACT_APP_DOMAIN}/.netlify/functions/landing`);
        const landingDataJson: LandingData = await landingDataResponse.json();
        return landingDataJson;
      }

      setLandingData(await wait(getLandingDataJson(), 420));
    })();
  }, []);

  return { globalData, landingData };
};

export const ContentfulContext = React.createContext({} as ReturnType<typeof useDefaultContext>);

export const ContentfulProvider: React.FC = function ContentfulProvider(props) {
  return <ContentfulContext.Provider value={useDefaultContext()} {...props} />;
};

export function useContentfulContext() {
  return useContext(ContentfulContext);
};
