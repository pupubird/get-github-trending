const scrape = require('./src/scrape');
const { validate } = require('./src/validate');

exports.handler = async (event) => {
    console.log(typeof scrape)
    const { language, since, spoken_language_code } = event["queryStringParameters"] || {language:"",since:"",spoken_language_code:""};

    if (!validate(language, spoken_language_code, since)) return {
        statusCode: 400,
        body: "Bad request",
    }

    const data = await scrape(language, since, spoken_language_code);

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};
