const { createClient } = require('contentful');

const { CONTENTFUL_SPACE, CONTENTFUL_ACCESS_TOKEN, REACT_APP_DOMAIN } = process.env;

const contentful = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

/**
 * @see {@tutorial https://functions-playground.netlify.com/}
 * @type {(entryId: string) => import('aws-lambda').Handler}
 */
exports = entryId => (event, context, callback) => {
  contentful
    .getEntry(entryId)
    .then(/** @param {import('../src/types').LandingData} entry */ entry => {
      callback(null, {
        statusCode: 200,
        // maybe dont use this since localhost needs access during dev
        // headers: { 'Access-Control-Allow-Origin': REACT_APP_DOMAIN },
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(entry),
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
