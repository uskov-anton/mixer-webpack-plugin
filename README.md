# Mixer Webpack Plugin

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/mixer-webpack-plugin)
[![node](https://img.shields.io/node/v/gh-badges.svg)](https://nodejs.org/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

## Installation

```bash
$ npm install mixer-webpack-plugin --save-dev
```

## Usage

```js
import MixerPlugin from 'mixer-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    // ...
    plugins: [
        MixerPlugin(
			new HtmlPlugin({ /* options */ }), // target
			new ExtractTextPlugin({ /* options */ }), // mixin
			// other mixins...
		),
        // ...
    ]
};
```

[Full example](https://github.com/uskov-anton/mixer-webpack-plugin-example)

## License

This project is licensed under [MIT](LICENSE).