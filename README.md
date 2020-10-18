# Detect GPU

[![Build Status](https://travis-ci.com/TimvanScherpenzeel/detect-features.svg?branch=master)](https://travis-ci.com/TimvanScherpenzeel/detect-features)
[![npm version](https://badge.fury.io/js/detect-features.svg)](https://badge.fury.io/js/detect-features)
[![gzip size](https://img.badgesize.io/https:/unpkg.com/detect-features/dist/detect-features.esm.js?compression=gzip)](https://unpkg.com/detect-features)
[![install size](https://packagephobia.now.sh/badge?p=detect-features)](https://packagephobia.now.sh/result?p=detect-features)

Classifies GPUs based on their 3D rendering benchmark score allowing the developer to provide sensible default settings for graphically intensive applications. Think of it like a user-agent detection for the GPU but more powerful.

## Demo

[Live demo](https://timvanscherpenzeel.github.io/detect-features/)

## Installation

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
 $ npm install detect-features
```

## Usage

```ts
import { getFeatures } from 'detect-features';

(async () => {
  const features = await getFeatures();

  // Example output:
  // {
  //   "tier": 1,
  //   "isMobile": false,
  //   "type": "BENCHMARK",
  //   "fps": 21,
  //   "gpu": "intel iris graphics 6100"
  // }
})();
```

## Support

Special care has been taken to make sure all browsers that support `WebGL` are also supported by `detect-features` including `IE 11`.

## Licence

My work is released under the [MIT license](https://raw.githubusercontent.com/TimvanScherpenzeel/detect-features/master/LICENSE).
