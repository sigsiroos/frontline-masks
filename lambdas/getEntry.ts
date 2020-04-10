import { createClient } from 'contentful';
import type { Handler } from 'aws-lambda';

const { CONTENTFUL_SPACE, CONTENTFUL_ACCESS_TOKEN, REACT_APP_DOMAIN } = process.env;

const contentful = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

/** @see {@tutorial https://functions-playground.netlify.com/} */
export const getEntry = <
  EntryData
>(entryId: string): Handler<{
  body: any,
  headers: { [key: string]: string, referer: string },
  httpMethod: string
  isBase64Encoded: boolean
  path: string
  queryStringParameters: object
}> => async (event, context, callback) => {
  const url = new URL(event.headers.referer);
  const thisRequestIsBeingMadeFromASafeOrigin = url.hostname.match(/frontlinemasks\.netlify\.com$/);

  const headers = {
    /**
     * @see {@tutorial https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin}
     * let's only allow requests from our own sites
     */
    'Access-Control-Allow-Origin': thisRequestIsBeingMadeFromASafeOrigin
      ? event.headers.referer
      : 'null',
  };

  try {
    const entry = await contentful.getEntry<EntryData>(entryId);
    return callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify(entry),
    });
  } catch (err) {
    return callback(err, {
      /** @see {@tutorial https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418} */
      statusCode: 418,
      headers,
      body: JSON.stringify(err),
    });
  }
};
