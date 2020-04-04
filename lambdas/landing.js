const { createClient } = require('contentful');

const { CONTENTFUL_SPACE, CONTENTFUL_ACCESS_TOKEN, DOMAIN } = process.env;

/** @see {@tutorial https://app.contentful.com/spaces/ab792hsrcg3y/home} */
const contentful = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

exports.handler = (event, context, callback) => {
  contentful
    .getEntry('7pAhu0kWc7Q8IBzBHiBVns')
    .then(/** @param {import('../src/types').LandingData} entry */ entry => {
      callback(null, {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': DOMAIN },
        body: JSON.stringify(entry),
      });
    });
};
