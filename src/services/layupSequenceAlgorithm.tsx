export default class LayupSequenceAlgorithm {
  private cache: Map<number, number>;

  constructor() {
    this.cache = new Map<number, BigInt>();
  }

  public execute(totalIterations: number): { finalSum: BigInt; cumulativeSum: BigInt; timeTaken: number; spaceUsed: number } {
    const startTime = performance.now();

    let cumulativeSum: BigInt = BigInt(0);
	let finalSum: BigInt = BigInt(0);
    for (let i = 0; i < totalIterations; i++) {
      const sum = this.recursiveLayup(i);
	  finalSum = BigInt(sum);
	  cumulativeSum += finalSum;
    }

    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    const spaceUsed = this.cache.size * (8 + 8);

    return { finalSum, cumulativeSum, timeTaken, spaceUsed };
  }

  private recursiveLayup(outerIndex: number): number {
    // Prevent duplicate processing of data
    const cachedValue = this.cache.get(outerIndex);
    if (cachedValue !== undefined) return cachedValue;

    let returnValue = 0;
    if (outerIndex <= 2) {
      returnValue = outerIndex;
    } else if (outerIndex % 2) {
      returnValue = this.recursiveLayup(outerIndex - 1) + this.recursiveLayup(outerIndex - 2);
    } else {
      returnValue = this.recursiveLayup(outerIndex - 1) - this.recursiveLayup(outerIndex - 2);
    }

    this.cache.set(outerIndex, BigInt(returnValue));
    return returnValue;
  }
}

