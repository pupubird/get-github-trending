const express = require('express');
const app = express();
const scrape = require('./scrape');
const { developers } = require('./scrape');
const validate = require('./validate');
const fs = require('fs');

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0'

app.use(validate);

app.get('/repositories', async (req, res) => {
    const { language, since, spoken_language_code } = req.query;
    const data = await scrape(language, since, spoken_language_code);

    res.send(data);
})

app.get('/developers', async (req, res) => {
    const { language, since } = req.query;
    const data = await developers(language, since);
    res.send(data);
})

app.get('/languages', async (req, res) => {
    const stream = fs.readFileSync(process.cwd() + '/src/languages.json');
    const languages = JSON.parse(stream)
    res.send(languages)
})

app.get('/spoken_languages', async (req, res) => {
    const stream = fs.readFileSync(process.cwd() + '/src/spoken-languages-code.json');
    const languages = JSON.parse(stream)
    res.send(languages)
})

app.listen(PORT, HOST, console.log.bind(this, `Listening port ${PORT} host ${HOST}`))