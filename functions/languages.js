const fs = require('fs');
module.exports = async (event) => {
    const data = fs.readFileSync(process.cwd() + '/src/languages.json', "utf8")
    return {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        statusCode: 200,
        body: data,
    };
};
