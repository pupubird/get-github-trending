const fs = require('fs');
module.exports = async (event) => {
    const data = fs.readFileSync(process.cwd() + '/src/spoken-languages-code.json', "utf8")
    return {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        statusCode: 200,
        body: data,
    };
};
