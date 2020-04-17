import { getData } from '../getData';
import type { ColorsData } from '../../src/types';

/**
 * inconveniently enough, contentful doesn't resolve Entries if they are nested deeply enough,
 * which `Colors`' `Color`s would be if `Colors` were to be accessed via `Globals`. so instead,
 * just get the `Colors` directly via a `getEntry`
 * @see {@link https://app.contentful.com/spaces/ab792hsrcg3y/entries/11r1ec7hf3tsis0A0XeKwQ}
 */
export const handler = getData<ColorsData>('entry', '11r1ec7hf3tsis0A0XeKwQ');
