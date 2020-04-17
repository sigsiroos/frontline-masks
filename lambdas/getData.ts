import { createClient } from 'contentful';
import 'core-js/stable'; // https://babeljs.io/docs/en/next/babel-polyfill.html
import 'regenerator-runtime/runtime'; // https://babeljs.io/docs/en/next/babel-polyfill.html
import type { Handler } from 'aws-lambda';

const { CONTENTFUL_SPACE, CONTENTFUL_ACCESS_TOKEN } = process.env;

export const contentful = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export interface NetlifyLambdaEvent {
  body: any
  headers: { [key: string]: string, referer: string }
  httpMethod: string
  isBase64Encoded: boolean
  path: string
  queryStringParameters: { [key: string]: any }
};

/** @see {@tutorial https://functions-playground.netlify.com/} */
export const getData = <Data>(
  type: 'entry' | 'asset',
  id: string
): Handler<NetlifyLambdaEvent> => async (
  event, context, callback
) => {
  const url = event.headers.referer ? new URL(event.headers.referer) : { hostname: 'localhost' };

  const thisRequestIsBeingMadeDuringDevelopment = url.hostname === 'localhost';

  const thisRequestIsBeingMadeFromASafeOrigin =
    url.hostname.match(/frontlinemasks\.netlify\.com$/) ||
    thisRequestIsBeingMadeDuringDevelopment; // localhost isnt actually safe lol but oh wells we need access from our dev env

  const headers = {
    /**
     * @see {@tutorial https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin}
     * let's only allow requests from our own sites
     */
    'Access-Control-Allow-Origin': thisRequestIsBeingMadeFromASafeOrigin ? '*' : 'null',
  };

  try {
    const responseData = await (
      (type === 'entry')
        ? id ? contentful.getEntry<Data>(id) : contentful.getEntries<Data>() :
      (type === 'asset')
        ? id ? contentful.getAsset(id) : contentful.getAssets() :
      new Promise<undefined>((resolve, reject) => reject(new Error(`Invalid getData parameters: ${JSON.stringify([type, id])}`)))
    );

    return callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ...(
          thisRequestIsBeingMadeDuringDevelopment
            ? { event, context, callback }
            : {}
        ),
        ...responseData,
      }),
    });
  } catch (err) {
    return callback(err, {
      /** @see {@tutorial https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418} */
      statusCode: 418,
      headers,
      body: JSON.stringify({
        ...(
          thisRequestIsBeingMadeDuringDevelopment
            ? { event, context, callback }
            : {}
        ),
        err,
      }),
    });
  }
};
