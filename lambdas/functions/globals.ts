import { getData } from '../getData';
import type { GlobalData } from '../../src/types';

/** @see {@link https://app.contentful.com/spaces/ab792hsrcg3y/entries/4OnwW3KeizWm0GDh344TDB} */
export const handler = getData<GlobalData>('entry', '4OnwW3KeizWm0GDh344TDB');
