import { Position } from "./Position";

export class GeoComparesion {
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

  // public toPositionsList(points: number[][]): Position[] {
  //   const positions: Position[] = [];
  //   points.forEach((point) => {
  //     positions.push(new Position(point));
  //   });
  //   return positions;
  // }

  public getVectorialLength(firstPoint: Position, secondPoint: Position) {
    const firstPointX = firstPoint.lat;
    const firstPointY = firstPoint.long;
    const secondPointX = secondPoint.lat;
    const secondPointY = secondPoint.long;

    return Math.sqrt(
      Math.pow(firstPointX - secondPointX, 2) +
        Math.pow(firstPointY - secondPointY, 2)
    );
  }

  public getTheNearestOfTowPoints(
    root: Position,
    firstPoint: Position,
    secondPoint: Position
  ): Position {
    return this.getVectorialLength(root, firstPoint) >
      this.getVectorialLength(root, secondPoint)
      ? firstPoint
      : secondPoint;
  }

  public getTheNearestPoint(root: Position, ...points: Position[]): Position {
    let theNearest = points[0];
    points.forEach((point) => {
      theNearest = this.getTheNearestOfTowPoints(root, point, theNearest);
    });
    return theNearest;
  }

  public gettheNearestPointsByRange(
    root: Position,
    range: number,
    ...points: Position[]
  ): Position[] {
    const theNearestPositions: Position[] = [];
    points.forEach((point) => {
      if (this.getVectorialLength(root, point) < range) {
        theNearestPositions.push(point);
      }
    });
    return theNearestPositions;
  }
}
