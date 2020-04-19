// need at least one `import` statement to make this file a module, which will allow importing all the declaration types
import type { Entry, Asset } from 'contentful';

/* ******************************** utility types ******************************** */
declare type ArrayElement<ArrayType> =
  ArrayType extends (infer ElementType)[] ? ElementType :
  ArrayType extends ReadonlyArray<infer ElementType> ? ElementType :
  never;

declare type ResolveType<T> = T extends Promise<infer R> ? R : T;

/** convert a type to the type created by performing `Object.entries` on an instance of this type */
declare type Entries<T, M = Required<{ [K in keyof T]: [K, T[K]] }>> = M[keyof M][];
/* ******************************** utility types ******************************** */

declare interface ColorData<N extends string = string, C extends string = string> {
  name: N
  code: C
}

/** you may not always receive this due to the (free tier) contentful api's inability to resolve deeply nested entries */
type FullColorEntry = Entry<ColorData>;

declare type ColorEntry = Omit<FullColorEntry, 'fields'> & Partial<Pick<FullColorEntry, 'fields'>>;

declare interface ColorsData {
  blue: Entry<ColorData<'Blue', '#6dcde3'>>,
  orange: Entry<ColorData<'Orange', '#f38530'>>,
  text: Entry<ColorsData<'Text', '#3C4858'>>,
  success: Entry<ColorsData<'Success', '#4bb543'>>,
}

declare type ColorsEntry = Entry<ColorsData>;

declare type GlobalData = {
  companyName: string,
  companyLogoWhite: Asset,
  companyLogoOrange: Asset,
  navbarLogo: Asset,
  instagram: string,
  goFundMe: string,
  pages: any[],
  colors: Entry<ColorsData>,
};

declare type GlobalsEntry = Entry<GlobalData>;

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
  actions: Entry<LandingActionData>[]
};

declare type LandingEntry = Entry<LandingData>;

declare interface LandingActionData {
  title?: string
  iconImage?: Asset
  fontAwesomeIcon?: string
  iconColor?: ColorEntry
  description?: string
  link?: string
};

/**
 * the data for the mission view from contentful.
 * includes title, tagline, background info, statement, statement title, callToAction title and text
 * @see {@link https://app.contentful.com/spaces/ab792hsrcg3y/entries/5V4oqAqYSwWxB04fje6LAt}
 * @see {@link lambdas/mission.js}
 */
declare interface MissionData {
  title: string,
  tagline: string,
  background: string,
  missionStatementTitle: string,
  statement: string,
  callToActionTitle: string,
  callToActionText: string
};

declare type MissionEntry = Entry<MissionData>;
