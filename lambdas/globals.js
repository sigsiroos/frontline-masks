const { getEntry } = require('./getEntry');

/** @see {@link https://app.contentful.com/spaces/ab792hsrcg3y/entries/4OnwW3KeizWm0GDh344TDB} */
// exports.handler = getEntry('4OnwW3KeizWm0GDh344TDB');
exports.handler = (e, c, callback) => {
  callback(null, {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(getEntry)
  })
}
