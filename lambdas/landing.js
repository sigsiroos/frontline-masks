const { createClient } = require('contentful');

const { CONTENTFUL_SPACE, CONTENTFUL_ACCESS_TOKEN, REACT_APP_DOMAIN } = process.env;

const contentful = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

/**
 * @see {@link https://app.contentful.com/spaces/ab792hsrcg3y/home}
 * @see {@tutorial https://functions-playground.netlify.com/}
 * 
 * @type {import('aws-lambda').Handler}
 */
exports.handler = (event, context, callback) => {
  contentful
    .getEntry('7pAhu0kWc7Q8IBzBHiBVns')
    .then(/** @param {import('../src/types').LandingData} entry */ entry => {
      callback(null, {
        statusCode: 200,
        // maybe dont use this since localhost needs access during dev
        // headers: { 'Access-Control-Allow-Origin': REACT_APP_DOMAIN },
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(entry),
      });
    });
};
