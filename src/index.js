const express = require('express');
const app = express();
const scrape = require('./scrape');
const validate = require('./validate');

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0'

app.use(validate);

app.get('/repositories', async (req, res) => {
    const { language, since, spoken_language_code } = req.query;
    const data = await scrape(language, since, spoken_language_code);

    res.send(data);
})

app.listen(PORT, HOST, console.log.bind(this, `Listening port ${PORT} host ${HOST}`))