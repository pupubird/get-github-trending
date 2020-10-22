const scrape = require('../src/scrape');
const { validate } = require('../src/validate');

module.exports = async (event) => {
    const { language, since, spoken_language_code } = event["queryStringParameters"] || { language: "", since: "", spoken_language_code: "" };

    if (!validate(language, spoken_language_code, since)) return {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        statusCode: 400,
        body: "Bad request",
    }

    const data = await scrape(language, since, spoken_language_code);

    return {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        statusCode: 200,
        body: JSON.stringify(data),
    };
};
