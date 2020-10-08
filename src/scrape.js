const fetch = require('node-fetch');
const cheerio = require('cheerio');

module.exports = async (language = "", since = "", spoken_language_code = "") => {
    const url = `https://github.com/trending${language ? `/${language}` : ''}?since=${since}&spoken_language_code=${spoken_language_code}`
    const data = await fetch(url);
    const $ = cheerio.load(await data.text());
    return $('.Box-row')
        .get()
        .map(repo => {
            const $repo = $(repo);

            const description = $repo.find('p').text().trim();

            const url = `https://github.com${$repo.find('h1 > a').attr('href')}`;

            const title = $repo.find('h1 > a').text()
                .split('\n').join('')
                .trim()
                .split('/')
                .map(e => e.trim())
                .join(' / ');

            const $details = $repo.find('div');

            const $color = $details.find('.repo-language-color')
            const color = $color.attr('style') && $color.attr('style').split("#")[1];

            const language = $color.next().text();

            const $stars = $details.find('svg[aria-label="star"]');
            const stars = $stars.parent().text()
                .split('\n').join('')
                .trim();

            const currentPeriodStar = $details.children().last().text()
                .split('\n').join('')
                .trim()
                .match(/[0-9]{1,}/)[0]

            const $forks = $details.find('svg[aria-label="fork"]');
            const forks = $forks.parent().text()
                .split('\n').join('')
                .trim();

            const avatar = `https://github.com/${title.split(" / ")[0]}.png?size=40`;

            return {
                title,
                url,
                description,
                color,
                language,
                stars,
                currentPeriodStar,
                forks,
                avatar
            };
        });
};