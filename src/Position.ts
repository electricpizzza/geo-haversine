export class Position {
  lat: number;
  long: number;

  constructor(private coordinates: number[]) {
    this.lat = coordinates[0];
    this.long = coordinates[1];
  }

  public getVectorialLength(point: Position) {
    const pointX = point.lat;
    const pointY = point.long;
    const secondPointX = this.lat;
    const secondPointY = this.long;

    return Math.sqrt(
      Math.pow(pointX - secondPointX, 2) + Math.pow(pointY - secondPointY, 2)
    );
  }

  public getTheNearestOfTowPoints(
    firstPoint: Position,
    secondPoint: Position
  ): Position {
    return this.getVectorialLength(firstPoint) >
      this.getVectorialLength(secondPoint)
      ? firstPoint
      : secondPoint;
  }

  public getTheNearestPoint(...points: Position[]): Position {
    let theNearest = points[0];
    points.forEach((point) => {
      theNearest = this.getTheNearestOfTowPoints(point, theNearest);
    });
    return theNearest;
  }
}
