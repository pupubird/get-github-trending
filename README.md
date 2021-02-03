# [https://hackertab.pupubird.com/repositories](https://hackertab.pupubird.com/repositories) will no longer be active
<div align="center">

# Get Github Trending

</div>

<div align="center">

![Status](https://img.shields.io/badge/status-active-success.svg)
[![GitHub Issues](https://img.shields.io/github/issues/pupubird/get-github-trending.svg)](https://github.com/pupubird/get-github-trending/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/pupubird/get-github-trending.svg)](https://github.com/pupubird/get-github-trending/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

<p align="center"> A self-hosted version of https://github.com/huchenme/github-trending-api
    <br> 
</p>

## Demo

Check out the demo here! [https://hackertab.pupubird.com/repositories](https://hackertab.pupubird.com/repositories)

## 📝 Table of Contents

- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [TODO](#todo)
- [Built Using](#built_using)
- [Acknowledgments](#acknowledgement)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

For manual install:

```bash
npm i
```

or with docker

```bash
docker build .
```

## 🚀 Deployment <a name = "deployment"></a>

This project is configured with [serverless](https://www.serverless.com/), hence simply run:

```bash
serverless deploy
```

## 🎈 Usage <a name="usage"></a>

For nodejs only:

```bash
npm run start
```

Go to your localhost and try access to `/repositores`!

For more information on the API, you may refer to [https://github.com/huchenme/github-trending-api](https://github.com/huchenme/github-trending-api) or [https://githubtrendingapi.docs.apiary.io/#](https://githubtrendingapi.docs.apiary.io/#)

## 📃 TODO <a name = "todo"></a>

- [x] Implement core trending repositories API
- [x] Implement trending developers API
- [x] Implement list of spoken languages API
- [x] Implement list of languages API

## ⛏️ Built Using <a name = "built_using"></a>

- [CheerioJS](https://cheerio.js.org/) - Web Scraper
- [Express](https://expressjs.com/) - Server Framework

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- The inspiration is coming from [https://github.com/huchenme/github-trending-api](https://github.com/huchenme/github-trending-api), credit of the idea goes to him!
