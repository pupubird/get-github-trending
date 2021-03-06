const { developers } = require('../src/scrape');
const { validate } = require('../src/validate');

module.exports = async (event) => {
    const { language, since } = event["queryStringParameters"] || { language: "", since: "" };

    if (!validate(language, since)) return {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        statusCode: 400,
        body: "Bad request",
    }

    const data = await developers(language, since);

    return {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        statusCode: 200,
        body: JSON.stringify(data),
    };
};
