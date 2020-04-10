import { getData } from '../getData';
import type { Handler } from 'aws-lambda';
import type { NetlifyLambdaEvent } from '../getData';

/** @see {@link https://app.contentful.com/spaces/ab792hsrcg3y/entries/4OnwW3KeizWm0GDh344TDB} */
export const handler: Handler<NetlifyLambdaEvent> = (event, context, callback) =>
  getData(event.queryStringParameters.type, event.queryStringParameters.id)(event, context, callback);
