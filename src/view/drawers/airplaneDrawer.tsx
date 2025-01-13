import { Constants } from '../../config/constants.ts';
import { Airplane } from '../../types/airplane.tsx';

export class AirplaneDrawer {
  private canvas: HTMLCanvasElement;
  private airplane: Airplane;


  constructor(canvas: HTMLCanvasElement, airplane: Airplane) {
    this.canvas = canvas;
    this.airplane = airplane;
  }

  public draw(context: CanvasRenderingContext2D, airplane: Airplane): void {
    const { width, height } = this.canvas;
  
    context.save();
    context.translate(width / 2, height / 2);
    context.fillStyle = Constants.PLANE_COLOR;
    context.beginPath();
    context.arc(0, 0, 5, 0, 2 * Math.PI); // Airplane marker size
    context.fill();
    context.restore();

  }
}

