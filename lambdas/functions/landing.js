const { createClient } = require('contentful');

const { CONTENTFUL_SPACE, CONTENTFUL_ACCESS_TOKEN, REACT_APP_DOMAIN } = process.env;

const contentful = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

/**
 * @see {@tutorial https://functions-playground.netlify.com/}
 * 
//  * FYI since this code is meant to be shared across netlify lambdas and _not_
//  * meant to be a lambda itself, it needs to be located _outside_ of the
//  * functions directory!
//  * @see {@tutorial https://community.netlify.com/t/using-require-to-include-a-relative-module-in-netlify-functions-on-node/4177}
 * nevermind.. relative imports just don't seem to be working.
 * for now just copy this template into the lambdas
 * 
 * @type {(entryId: string) => import('aws-lambda').Handler}
 */
const getEntry = entryId => (event, context, callback) => {
  contentful
    .getEntry(entryId)
    .then(/** @param {import('../src/types').LandingData} entry */ entry => {
      callback(null, {
        statusCode: 200,
        // maybe dont use this since localhost needs access during dev
        // headers: { 'Access-Control-Allow-Origin': REACT_APP_DOMAIN },
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify([
          event,
          context,
          entry
        ]),
      });
    })
    .catch(err => {
      callback(err, {
        /** @see {@tutorial https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418} */
        statusCode: 418,
        // maybe dont use this since localhost needs access during dev
        // headers: { 'Access-Control-Allow-Origin': REACT_APP_DOMAIN },
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(err),
      });
    });
};



/** @see {@link https://app.contentful.com/spaces/ab792hsrcg3y/home} */
exports.handler = getEntry('7pAhu0kWc7Q8IBzBHiBVns');
