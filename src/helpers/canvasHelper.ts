class CanvasHelper {
  public static GRID_SIZE: number = 200;

  public static get gridWidth(): number {
    return document.getElementById('canvas').width / this.GRID_SIZE;
  }

  public static get gridHeight(): number {
    return document.getElementById('canvas').height / this.GRID_SIZE;
  }
}

export default CanvasHelper;

