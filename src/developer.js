const fetch = require('node-fetch');
const cheerio = require('cheerio');

module.exports = async (language = "", since = "") {
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
