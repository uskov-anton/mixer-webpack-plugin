# Mixer Webpack Plugin

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

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