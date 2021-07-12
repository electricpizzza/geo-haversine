export class Range {
  constructor(public distance: number) {}
  private earthR = 12742 / 2;
}

/**
 *
 * **********************************
 * ****** Haversine Formyula*********
 * **********************************
 *
 * Haversine
 * formula:	a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
 * c = 2 ⋅ atan2( √a, √(1−a) )
 * d = R ⋅ c
 *
 * **********************************
 * ************* The Code ***********
 * **********************************
 *
 * const R = 6371e3; // metres
 * const φ1 = lat1 * Math.PI/180; // φ, λ in radians
 * const φ2 = lat2 * Math.PI/180;
 * const Δφ = (lat2-lat1) * Math.PI/180;
 * const Δλ = (lon2-lon1) * Math.PI/180;  *
 * const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
 *           Math.cos(φ1) * Math.cos(φ2)
 *           Math.sin(Δλ/2) * Math.sin(Δλ/2);
 *
 * const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
 *
 * const d = R * c; // in metres
 */
