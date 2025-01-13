export default class MathHelper {

  // Convert yawAngle into radian and provide the number of positions to increment in each direction 
  // Airspeed is scaled by a factor of 50. This is semi-arbitrary, and intended to make the background
  // 'movement' less nausea inducing at higher speeds and equates to 1000^2 nautical miles per grid square.
  public static calculateMovementOffset(airspeed: number, yawAngle: number): [number, number] {
    const movementOffsetY = Math.cos(this.toRadian(yawAngle)) * this.scaleValue(airspeed);
    const movementOffsetX = Math.sin(this.toRadian(yawAngle)) * this.scaleValue(airspeed);
    return [movementOffsetX, movementOffsetY];
  }

  public static toRadian(degrees: number) : number {
    return degrees * (Math.PI / 180);
  }

  public static scaleValue(value: number) : number {
    return (value / 50).toFixed(2);
  }
}

