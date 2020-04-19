import { getData } from "../getData";
import type { MissionData } from "../../src/types";

/** @see {@link https://app.contentful.com/spaces/ab792hsrcg3y/entries/5V4oqAqYSwWxB04fje6LAt} */
export const handler = getData<MissionData>("entry", "5V4oqAqYSwWxB04fje6LAt");