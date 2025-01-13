import { Airplane } from '../types/airplane.tsx';
import { Constants } from '../../config/constants.ts';
import MathHelper from '../../helpers/mathHelper.ts';

export class TrailDrawer {
  private airplane: Airplane;

  constructor(airplane: Airplane) {
    this.airplane = airplane;
  }

  public draw(context: CanvasRenderingContext2D, trailHistory: [number, number][], airplane: Airplane, movementOffsetX: number, movementOffsetY: number): void {
    if (!trailHistory || trailHistory.length < 2) {
      return;
    }
  
    context.save();
  
    const halfWidth = context.canvas.width / 2;
    const halfHeight = context.canvas.height / 2;
  
    context.translate(halfWidth, halfHeight);
    const yawAngleRadians = MathHelper.toRadian(airplane.yawAngle);
    context.rotate(yawAngleRadians);
    context.translate(-airplane.x - movementOffsetX, -airplane.y - movementOffsetY);
  
    // Draw the trail
    context.beginPath();
    for (let i = 0; i < trailHistory.length - 1; i++) {
      const [x1, y1] = trailHistory[i];
      const [x2, y2] = trailHistory[i + 1];
  
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
    }
  
    // Style the trail
    context.strokeStyle = Constants.TRAIL_COLOR;
    context.lineWidth = 2;
    context.stroke();
  
    context.restore(); // Restore the canvas state
  }
  
}

