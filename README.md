# Spotify Clone

[![dependencies Status](https://img.shields.io/david/marcobiedermann/spotify-clone)](https://david-dm.org/marcobiedermann/spotify-clone)
[![devDependencies Status](https://img.shields.io/david/dev/marcobiedermann/spotify-clone)](https://david-dm.org/marcobiedermann/spotify-clone?type=dev)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/marcobiedermann/spotify-clone/CI)
[![Netlify Status](https://api.netlify.com/api/v1/badges/61c90aa7-3e6e-436e-8497-2c69b699c156/deploy-status)](https://app.netlify.com/sites/marcobiedermann-spotify-clone/deploys)

Simple [Spotify](https://www.spotify.com/) clone using their [Web API](https://developer.spotify.com/documentation/web-api/).

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Setup

Install dependencies.

```sh
npm install
```

## Usage

### Build

Perform an optimized production build for your static files using [Webpack](https://webpack.js.org/).

```sh
npm run build
```

### Development

Start a hot-reloading development environment accessible by default at `http://localhost:8080` using [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/).

```sh
npm run develop
```

### Format

Format code using [Prettier](https://prettier.io/).

```sh
npm run format
```

### Generate

Generate TypeScript definitions files from [CSS Modules](https://github.com/css-modules/css-modules) using [typed-css-modules](https://github.com/Quramy/typed-css-modules).

```sh
npm run generate:css
```

### Linting

Lint CSS and JavaScript code.

```sh
npm run lint
```

Lint CSS using [Stylelint](https://stylelint.io/).

```sh
npm run lint:css
```

Lint JavScript using [ESLint](https://eslint.org/).

```sh
npm run lint:js
```

### Testing

Run tests using [Vitest](https://vitest.dev/) testing framework.

```sh
npm test
```

## License

[MIT](LICENSE) © [Marco Biedermann](https://github.com/marcobiedermann)
