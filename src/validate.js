const fs = require('fs');
const languages = JSON.parse(fs.readFileSync('./src/languages.json'))
const spokenLanguagesCode = JSON.parse(fs.readFileSync('./src/spoken-languages-code.json'))

function validateLanguages(language) {
    return !language || !!languages.find(lan => lan['urlParam'] == language);
}
function validateSpokenLanguagesCode(languageCode) {
    return !languageCode || !!spokenLanguagesCode.find(code => code['urlParam'] == languageCode)
}
function validatePeriod(period) {
    return !period || ['daily', 'weekly', 'monthly'].includes(period)
}

exports.validate = (language, spoken_language_code, since) => {
    return validateLanguages(language) &&
        validateSpokenLanguagesCode(spoken_language_code) &&
        validatePeriod(since)
}

module.exports = (req, res, next) => {
    const query = req.query;

    if (validateLanguages(query['language']) &&
        validateSpokenLanguagesCode(query['spoken_language_code']) &&
        validatePeriod(query['since'])) return next()

    res.status(400).send()
}