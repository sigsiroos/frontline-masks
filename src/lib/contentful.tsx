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
            await fetch('https://mystifying-kepler-65f0e0.netlify.com/.netlify/functions/landing')
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
