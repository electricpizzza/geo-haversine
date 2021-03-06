# Geo Haversine

[![NPM version](https://img.shields.io/npm/v/geo-haversine.svg)](https://www.npmjs.com/package/geo-haversine) [![NPM license](https://img.shields.io/npm/l/geo-haversine.svg)](https://www.npmjs.com/package/geo-haversine)

## About

Is a package that used The Haversine formula to compare distance between two points on Earth using lat/long coordinates. to get the nearest points and get all positions included in a range.

This is great for use with project that use geolocation api, which provides lat/long coordinates to locate any position near you.

- getDistance
- getTheNearestOfTowPoints
- getTheNearestPoint
- gettheNearestPointsByRange

## Installation

As any npm package you can install `geo-haversine` using:

```bash
$ npm install --save geo-haversine
```

Or by using yarn :

```bash
$ yarn add geo-haversine
```

## Usage

```javascript
import { GeoHaversine } from "geo-haversine";

const geoHaversine = new GeoHaversine();
```

Get a couple of latitude/longitude coordinates, then use them as the arguments for the `getDistance` method to get distance between tow points in a map. Example:

```javascript
// ---------- [latitude, longitude];
let pos1 = [36.151829, -115.143296];
let pos2 = [35.151465, -45.146284];

const distanceBetweenTowPoints = geoHaversine.getDistance(pos1, pos2);
```

Get an array of latitude/longitude coordinates, then use them as the arguments for the `getTheNearestPoint` method to get the nearest point in a map. Example:

```javascript
// ---------- [latitude, longitude];
let pos1 = [36.151829, -115.143296];
let pos2 = [35.151465, -45.146284];
let pos3 = [16.151465, -53.485613];
.
.
.
let posN = [36.12388, -115.369423];

const theNearestOfTowPoint = geoHaversine.getTheNearestOfTowPoints(pos1,pos2,pos3);

const nearestPoint = geoHaversine.getTheNearestPoint(pos1, pos2, pos3,..., posN);

```

Get an array of latitude/longitude coordinates, then use them as the arguments for the `getTheNearestPoint` method to get the nearest point in a map. Example:

```javascript
// ---------- [latitude, longitude];
let pos1 = [36.151829, -115.143296];
let pos2 = [35.151465, -45.146284];
let pos3 = [16.151465, -53.485613];
.
.
.
let posN = [36.12388, -115.369423];

let posList = [
  [55.3328, -66.325533],
  [54.3328, -6.325533],
  [5.3328, -56.325533],
  [69.3328, 16.325533],
  [55.3328, -66.325593],
]

const range = 14205359; // Distance of radius in meters.

const pointsInRange = geoHaversine.gettheNearestPointsByRange(pos1,range, pos2, pos3,..., posN);
// or
const pointsInRange = geoHaversine.gettheNearestPointsByRange(pos1,range, ...posList);

```

## Support

If you have a feature request, or spotted a bug or a technical problem, [create an issue here](https://github.com/electricpizzza/geo-haversine/issues/new).

For other questions, [contact me](mailto:zakariae.dinar@gmail.com).

## Licence

This repository is available under the [MIT license](https://www.npmjs.com/package/geo-haversine).

## Contact

Feel freee to contact me on my [email](mailto:zakariae.dinar@gmail.com). or social media
[Twiter](https://twitter.com/pizzafordinar), [Github](https://github.com/electricpizzza/) or [LinkedIn](https://ma.linkedin.com/in/zakariae-dinar).
