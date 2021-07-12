import { Position } from "./Position";

export class GeoHaversine {
  constructor() {}

  public toPositionsList(...points: number[][]): Position[] {
    const positions: Position[] = [];
    if (points.length === 1) {
    } else {
    }
    points.forEach((point) => {
      positions.push(new Position(point));
    });
    return positions;
  }

  public getVectorialLength(firstPoint: Position, secondPoint: Position) {
    const firstPointX = firstPoint.lat;
    const firstPointY = firstPoint.long;
    const secondPointX = secondPoint.lat;
    const secondPointY = secondPoint.long;

    const R = 6371e3; // metres
    const φ1 = (firstPointX * Math.PI) / 180; // φ, λ in radians
    const φ2 = (secondPointX * Math.PI) / 180;
    const Δφ = ((secondPointX - firstPointX) * Math.PI) / 180;
    const Δλ = ((secondPointY - firstPointY) * Math.PI) / 180;
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) +
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  /**
   * getDisttance
   * is the same as getVectorieLength but with pont as params
   * to Get distance between tow point on a map by gelo location long,lat
   *
   */
  public getDistance(firstPoint: number[], secondPoint: number[]) {
    if (firstPoint.length != 2 || secondPoint.length != 2)
      throw new Error("Position must be an array of tow numbers [Long,Lat]");

    const firstPos = new Position(firstPoint);
    const secondPos = new Position(secondPoint);
    const firstPointX = firstPos.lat;
    const firstPointY = firstPos.long;
    const secondPointX = secondPos.lat;
    const secondPointY = secondPos.long;

    const R = 6371e3; // metres
    const φ1 = (firstPointX * Math.PI) / 180; // φ, λ in radians
    const φ2 = (secondPointX * Math.PI) / 180;
    const Δφ = ((secondPointX - firstPointX) * Math.PI) / 180;
    const Δλ = ((secondPointY - firstPointY) * Math.PI) / 180;
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) +
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  public getTheNearestOfTowPoints(
    root: number[],
    firstPoint: number[],
    secondPoint: number[]
  ): Position {
    if (root.length != 2 || firstPoint.length != 2 || secondPoint.length != 2)
      throw new Error("Position must be an array of tow numbers [Long,Lat]");

    const posRoot = new Position(root);
    const firstPos = new Position(firstPoint);
    const secondPos = new Position(secondPoint);
    return this.getVectorialLength(posRoot, firstPos) >
      this.getVectorialLength(posRoot, secondPos)
      ? firstPos
      : secondPos;
  }

  public getTheNearestPoint(root: number[], ...points: number[][]): Position {
    if (root.length != 2)
      throw new Error(
        "Root Position must be an array of tow numbers [Long,Lat]"
      );

    const rootPos = new Position(root);
    let theNearest = new Position(points[0]);
    points.forEach((point) => {
      if (point.length != 2)
        throw new Error("Position must be an array of tow numbers [Long,Lat]");

      theNearest = rootPos.getTheNearestOfTowPoints(
        new Position(point),
        theNearest
      );
    });
    return theNearest;
  }

  /**
   * gettheNearestPointsByRangeAlt
   * this methode is an alternative
   */
  public gettheNearestPointsByRange(
    root: number[],
    range: number,
    ...points: number[][] // ): Position[] {
  ) {
    if (root.length != 2)
      throw new Error("Position must be an array of tow numbers [Long,Lat]");

    const rootPos = new Position(root);
    const theNearestPositions: Position[] = [];

    for (let index = 0; index < points.length; index++) {
      const point = points[index];
      if (point.length != 2)
        throw new Error("Position must be an array of tow numbers [Long,Lat]");
      if (this.getDistance(root, point) <= range) {
        theNearestPositions.push(new Position(point));
      }
    }
    return theNearestPositions;
  }
}
