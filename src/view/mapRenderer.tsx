import { Airplane } from '../types/airplane.tsx';
import { AirplaneDrawer } from './drawers/airplaneDrawer.tsx';
import { BackgroundDrawer } from './drawers/backgroundDrawer.tsx';
import { TrailDrawer } from './drawers/trailDrawer.tsx';
import CanvasHelper from '../helpers/canvasHelper.ts';
import MathHelper from '../helpers/mathHelper.ts';

export class MapRenderer {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private canvasHelper: CanvasHelper;
  private airplaneDrawer: AirplaneDrawer;
  private trailDrawer: TrailDrawer;
  private backgroundDrawer: BackgroundDrawer;
  private airplane: Airplane;

  constructor(canvasId: string) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
      throw new Error(`Canvas not found with ID: ${canvasId}`);
    }

    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Failed to get 2D rendering context');
    }

    this.canvas = canvas;
    this.context = context;
    this.canvasHelper = new CanvasHelper(canvas);
    this.backgroundDrawer = new BackgroundDrawer(this.canvas);
    this.airplane = new Airplane(this.canvas.width, this.canvas.height);
    this.airplaneDrawer = new AirplaneDrawer(this.canvas, this.airplane);
    this.trailDrawer = new TrailDrawer(this.airplane);
  }

  public update(): void {
    const [movementOffsetX, movementOffsetY] = MathHelper.calculateMovementOffset(
      this.airplane.airspeed / 50,
      this.airplane.yawAngle
    );
    this.airplane.updatePosition(movementOffsetX, movementOffsetY);

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.backgroundDrawer.draw(this.context, this.airplane, movementOffsetX, movementOffsetY);

    this.airplaneDrawer.draw(this.context, this.airplane);
    this.trailDrawer.draw(
      this.context,
      this.airplane.flightHistory,
      this.airplane,
      movementOffsetX,
      movementOffsetY
    );
  }
}

