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

    const R = 6371e3; // metres
    const φ1 = (this.lat * Math.PI) / 180; // φ, λ in radians
    const φ2 = (secondPointX * Math.PI) / 180;
    const Δφ = ((secondPointX - this.lat) * Math.PI) / 180;
    const Δλ = ((secondPointY - this.long) * Math.PI) / 180;
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) +
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
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
