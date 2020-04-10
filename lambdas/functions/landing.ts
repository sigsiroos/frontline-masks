import { getData } from '../getData';
import type { LandingData } from '../../src/types';

/** @see {@link https://app.contentful.com/spaces/ab792hsrcg3y/entries/7pAhu0kWc7Q8IBzBHiBVns} */
export const handler = getData<LandingData>('entry', '7pAhu0kWc7Q8IBzBHiBVns');
