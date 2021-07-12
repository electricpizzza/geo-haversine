# Geo Haversine

[![NPM version](https://img.shields.io/npm/v/geo-haversine.svg)](https://www.npmjs.com/package/geo-haversine) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/geo-haversine.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/geo-haversine.svg)](https://travis-ci.org/sebastiansandqvist/geo-haversine) [![NPM license](https://img.shields.io/npm/l/geo-haversine.svg)](https://www.npmjs.com/package/geo-haversine)

## About

Is a pakage that used `The Haversine formula` to compare distance between two points on Earth using lat/long coordinates. to get the nearests points and get all posisions included in a range.

This is great for use with the html5 geolocation api, which provides lat/long coordinates.

## Installation

As any npm package you can install `geo-haversine` using:

> npm install --save geo-haversine

## Usage

```javascript
import { GeoHaversine } from "geo-haversine";

const geoHaversine = new GeoHaversine();
```

Get a couple of latitude/longitude coordinates, then use them as the arguments for the `getDistance` method to get distance between tow points in a map. Example:

```javascript
// ---------- [latitude, longitude];
let pos1 = [36.151829, -115.143296];
let pos2 = [36.151465, -115.146284];

const distanceBetweenTowPoints = geoHaversine.getDistance(pos1, pos2);
```
