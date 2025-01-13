import { Airplane } from './airplane';
import CanvasHelper from '../../helpers/canvasHelper.ts';
import MathHelper from '../../helpers/mathHelper.ts';

export class BackgroundDrawer {
  private canvas: HTMLCanvasElement;
  public flightHistory: [number, number][] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  // This calculates the reverse tragectory of the airplane and
  // dynamically draws the grid to represent movement. 
  // This takes inspiration from Star Trek's Trans-Warp beaming
  // calculations : "Think of space as the thing that is moving"
  public draw(
    context: CanvasRenderingContext2D,
    airplane: Airplane,
    movementOffsetX: number,
    movementOffsetY: number
  ): void {
    const { width, height } = this.canvas;

    const gridSize = CanvasHelper.GRID_SIZE;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    const gridCenterX = airplane.x + movementOffsetX;
    const gridCenterY = airplane.y + movementOffsetY;

    const startX = gridCenterX - halfWidth;
    const endX = gridCenterX + halfWidth;
    const startY = gridCenterY - halfHeight;
    const endY = gridCenterY + halfHeight;

    const firstVerticalLine = Math.floor(startX / gridSize) * gridSize;
    const lastVerticalLine = Math.ceil(endX / gridSize) * gridSize;
    const firstHorizontalLine = Math.floor(startY / gridSize) * gridSize;
    const lastHorizontalLine = Math.ceil(endY / gridSize) * gridSize;

    context.save();
    context.translate(halfWidth, halfHeight);

    const yawAngleRadians = MathHelper.toRadian(airplane.yawAngle);
    context.rotate(yawAngleRadians);

    context.translate(-gridCenterX, -gridCenterY);

    context.strokeStyle = 'lightgray';

    // Vertical lines
    for (let x = firstVerticalLine; x <= lastVerticalLine; x += gridSize) {
      context.beginPath();
      context.moveTo(x, firstHorizontalLine);
      context.lineTo(x, lastHorizontalLine);
      context.stroke();
    }

    // Horizontal lines
    for (let y = firstHorizontalLine; y <= lastHorizontalLine; y += gridSize) {
      context.beginPath();
      context.moveTo(firstVerticalLine, y);
      context.lineTo(lastVerticalLine, y);
      context.stroke();
    }

    context.restore();
  }
}

