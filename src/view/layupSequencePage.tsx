import React, { useState } from "react";
import LayupSequenceAlgorithm from "../services/layupSequenceAlgorithm.tsx";

function LayupSequencePage() {
  const [iterations, setIterations] = useState(0);
  const [result, setResult] = useState<{ finalSum: number; timeTaken: number; spaceUsed: number } | null>(null);

  const handleRun = () => {
    const service = new LayupSequenceAlgorithm();
    const algoResult = service.execute(iterations);
    setResult(algoResult);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Layup Sequence</h2>
      <p>Enter the number of layers to compute the Layup Sequence:</p>
      <input
        type="number"
        value={iterations}
        onChange={(e) => setIterations(Number(e.target.value))}
        placeholder="Enter iterations"
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleRun}>Run Algorithm</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Results</h3>
          <p><strong>Final Sum:</strong> {result.finalSum.toLocaleString('en-US', {notation: 'scientific'})} </p>
          <p><strong>Cumulative Sum:</strong> {result.cumulativeSum.toLocaleString('en-US', {notation: 'scientific'})} </p>
          <p><strong>Time Taken:</strong> {result.timeTaken.toFixed(2)} ms</p>
          <p><strong>Space Used:</strong> {result.spaceUsed} bytes</p>
        </div>
      )}
    </div>
  );
}

export default LayupSequencePage;

