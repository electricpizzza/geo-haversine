import { Position } from "./Position";

export class GeoComparesion {
  constructor() {}

  getVectorialLength(firstPoint: Position, secondPoint: Position) {
    const firstPointX = firstPoint.x;
    const firstPointY = firstPoint.y;
    const secondPointX = secondPoint.x;
    const secondPointY = secondPoint.y;

    return Math.sqrt(
      Math.pow(firstPointX - secondPointX, 2) +
        Math.pow(firstPointY - secondPointY, 2)
    );
  }

  getTheNearestOfTowPoints(
    root: Position,
    firstPoint: Position,
    secondPoint: Position
  ): Position {
    return this.getVectorialLength(root, firstPoint) >
      this.getVectorialLength(root, secondPoint)
      ? firstPoint
      : secondPoint;
  }

  getTheNearestPoint(root: Position, ...points: Position[]): Position {
    let theNearest = points[0];
    points.forEach((point) => {
      theNearest = this.getTheNearestOfTowPoints(root, point, theNearest);
    });
    return theNearest;
  }

  gettheNearestPointsByRange(
    root: Position,
    range: number,
    ...points: Position[]
  ): Position[] {
    const theNearestPositions = [];
    points.forEach((point) => {
      if (this.getVectorialLength(root, point) < range) {
        theNearestPositions.push(point);
      }
    });
    return theNearestPositions;
  }
}
