const { GeoHaversine } = require("../lib/GeoHaversine");
const Position = require("../lib/Position");

const pos1 = Position.Position([12.33365, -54.33665]);
const pos2 = Position.Position([18.33365, -18.332255]);
const pos3 = Position.Position([32.33365, -45.33665]);

const geoHaversine = GeoHaversine();

// const len = pos1.getVectorialLength(pos2);
// console.log(pos1.getTheNearestPoint(pos2, pos3) == pos3);

// console.log(GeoHaversine.gettheNearestPointsByRange(pos1, 20, pos2, pos3));
