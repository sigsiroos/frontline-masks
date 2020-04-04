import React, { useEffect, useState, useContext } from 'react';
import type { LandingData } from '../types';


function useDefaultContext() {
  const [landingData, setLandingData] = useState(undefined as LandingData | undefined);

  useEffect(() => {
    (async () => {
      setLandingData(
        await (
          await import('../utils')
        ).wait(
          await (
            await fetch(`${process.env.REACT_APP_DOMAIN}/.netlify/functions/landing`)
          ).json() as LandingData,
          420
        )
      );
    })();
  }, []);

  return { landingData };
};

export const ContentfulContext = React.createContext({} as ReturnType<typeof useDefaultContext>);

export const ContentfulProvider: React.FC = function ContentfulProvider(props) {
  return <ContentfulContext.Provider value={useDefaultContext()} {...props} />;
};

export function useContentfulContext() {
  return useContext(ContentfulContext);
};
