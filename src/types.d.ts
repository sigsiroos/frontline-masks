// need at least one `import` statement to make this file a module, which will allow importing all the declaration types
import type { Entry, Asset } from 'contentful';

/* ******************************** utility types ******************************** */
declare type ArrayElement<ArrayType> =
  ArrayType extends (infer ElementType)[] ? ElementType :
  ArrayType extends ReadonlyArray<infer ElementType> ? ElementType :
  never;

declare type ResolveType<T> = T extends Promise<infer R> ? R : T;
/* ******************************** utility types ******************************** */

declare type GlobalData = {
  companyName: string,
  companyLogoWhite: string,
  companyLogoOrange: string,
  instagram: string,
  goFundMe: string,
  pages: any[],
};

declare type GlobalDataEntry = Entry<GlobalData>;

declare interface SponsorData {
  logo: Asset
  name: string
  website: string
  backgroundColor?: string
  logoPadding?: string
}

/**
 * the data for the landing view from contentful.
 * includes title, tagline, and background image
 * @see {@link https://app.contentful.com/spaces/ab792hsrcg3y/entries/7pAhu0kWc7Q8IBzBHiBVns}
 * @see {@link lambdas/landing.js}
 */
declare interface LandingData {
  title: string
  tagline: string
  background: Asset
  sponsors: Entry<SponsorData>[]
};

declare type LandingDataEntry = Entry<LandingData>;
