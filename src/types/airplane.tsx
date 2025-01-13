import { Constants } from '../config/constants.ts';
import MathHelper from '../helpers/mathHelper.ts';

export class Airplane {
  public x: number;
  public y: number;
  public yawAngle: number;
  public airspeed: number;
  public flightHistory: [number, number][] = [];

  constructor(width: number, height: number) {
    this.x = width / 2
    this.y = height / 2;
    this.yawAngle = 0;
    this.airspeed = 0;
  }

  public updatePosition(movementOffsetX: number, movementOffsetY: number): void {
    const transformedX = this.x - movementOffsetX;
    const transformedY = this.y - movementOffsetY;
    this.flightHistory.push([transformedX, transformedY]);

    // Keep Memory Contained
    if (this.flightHistory.length > Constants.TRAIL_LENGTH) {
      this.flightHistory.shift();
    }

    const [nextX, nextY] = this.getNextPosition(movementOffsetX, movementOffsetY);
    this.x = nextX;
    this.y = nextY;
  } 

  private getNextPosition(movementOffsetX: number, movementOffsetY: number): [number, number] {
    const deltaMovement = MathHelper.calculateMovementOffset(this.airspeed, this.yawAngle);
    let dx = -deltaMovement[0];
    let dy = -deltaMovement[1];

    return [this.x + dx, this.y + dy];
  }
}
