const { GeoHaversine } = require("../lib/GeoHaversine");

const pos1 = [19.33365, -54.33665];
const pos2 = [18.33365, -18.332255];
const pos3 = [32.33365, -45.33665];
const pos4 = [69.3328, 16.325533];

const posList = [
  [55.3328, -66.325533],
  [54.3328, -6.325533],
  [5.3328, -56.325533],
  [69.3328, 16.325533],
  [55.3328, -66.325593],
];

const geoHaversine = new GeoHaversine();

const distanceBetweenTowPoints = geoHaversine.getDistance(pos1, pos2);
console.log(distanceBetweenTowPoints);

const theNearestOfTowPoint = geoHaversine.getTheNearestOfTowPoints(
  pos1,
  pos2,
  pos3
);
console.log(theNearestOfTowPoint);

const nearestPoint = geoHaversine.getTheNearestPoint(pos1, pos2, pos3, pos4);
console.log(nearestPoint);
posList.forEach((pos) => {
  console.log(geoHaversine.getDistance(pos1, pos));
});
console.log("--------------\n");
const pointInRange = geoHaversine.gettheNearestPointsByRange(
  pos1,
  14205359,
  ...posList
);
console.log(pointInRange);
