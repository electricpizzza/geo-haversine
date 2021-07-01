import { Position } from "./Position";
import { GeoComparesion } from "./GeoComparesion";

const pos1 = new Position([12.33365, -54.33665]);
const pos2 = new Position([18.33365, -18.332255]);
const pos3 = new Position([32.33365, -45.33665]);

const geoComparesion = new GeoComparesion();

const len = pos1.getVectorialLength(pos2);
console.log(pos1.getTheNearestPoint(pos2, pos3) == pos3);
