const fetch = require('node-fetch');
const cheerio = require('cheerio');

module.exports.developers = async (language = "", since = "") => {
    const url = `https://github.com/trending/developers${language ? `/${language}` : ''}?since=${since}`
    const data = await fetch(url);
    const $ = cheerio.load(await data.text());
    return $('.Box').find('.Box-row').get().map(repo => {
        const $repo = $(repo);

        const $username = $repo.find('.link-gray');
        const username = $username.text().trim();

        const $name = $username.parent().prev();
        const name = $name.text().trim();

        const $org_name = $repo.find('.octicon-organization');
        const org_name = $org_name.text();

        const $repo_name = $repo.find('.octicon-repo').parent();
        const repo_name = $repo_name.text().trim();

        const $description = $repo_name.parent().next();
        const description = $description.text().trim();

        return {
            username,
            name,
            type: org_name ? 'organization' : 'user',
            url: `https://github.com/${username}`,
            avatar: `https://github.com/${username}.png?size=120`,
            repo: {
                repo_name,
                description
            }
        }
    });
}


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

            const avatar = `https://github.com/${title.split(" / ")[0]}.png?size=120`;

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