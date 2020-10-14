const fs = require('fs');
module.exports = async (event) => {
    const data = fs.readFileSync(process.cwd() + '/src/spoken-languages-code.json')
    return {
        statusCode: 200,
        body: data,
    };
};
