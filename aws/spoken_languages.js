const fs = require('fs');
exports.handler = async (event) => {
    const data = fs.readFileSync(process.cwd() + '/src/spoken-languages-code.json')
    return {
        statusCode: 200,
        body: data,
    };
};
