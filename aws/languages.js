const fs = require('fs');
exports.handler = async (event) => {
    const data = fs.readFileSync(process.cwd() + '/src/languages.json')
    return {
        statusCode: 200,
        body: data,
    };
};
