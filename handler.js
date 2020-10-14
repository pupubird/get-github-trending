module.exports.developers = require('./functions/developers');
module.exports.languages = require('./functions/languages');
module.exports.spoken_languages = require('./functions/spoken_languages');
module.exports.repositories = require('./functions/repositories');


module.exports.ping = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Response from lambda'
      },
      null,
      2
    ),
  };
};
