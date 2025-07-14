import { useEffect, useRef, useState } from "react";
import { saveAs } from "file-saver";

export const LandmarkRecorder = ({ currentLandmarks }) => {
  const [letter, setLetter] = useState("A");
  const [samples, setSamples] = useState([]);
  const lastRunRef = useRef(0);

  const flattenLandmarks = (landmarks) => {
    return landmarks.flatMap((point) => [point.x, point.y, point.z]);
  };

  // 2. Compute Mean Squared Error between two arrays
  const computeMSE = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return Infinity;
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
      const diff = arr1[i] - arr2[i];
      sum += diff * diff;
    }
    return sum / arr1.length;
  };

  useEffect(() => {
    if (!currentLandmarks || samples.length === 0) return;

    const now = Date.now();
    const timeSinceLastRun = now - lastRunRef.current;

    if (timeSinceLastRun < 500) return;
    lastRunRef.current = now;

    const flatLive = flattenLandmarks(currentLandmarks);

    let bestLetter = null;
    let bestError = Infinity;
    const threshold = 0.02;

    samples.forEach(({ letter, landmarks }) => {
      const error = computeMSE(flatLive, landmarks);
      if (error < bestError) {
        bestError = error;
        bestLetter = letter;
      }
    });

    if (bestError < threshold) {
      console.log("Recognized letter:", bestLetter);
    } else {
      console.log("No match found");
    }
  }, [currentLandmarks, samples]);

  // 4. Record sample for current letter
  const recordSample = () => {
    if (!currentLandmarks || currentLandmarks.length !== 21) {
      alert("No valid hand landmarks detected");
      return;
    }

    const flat = flattenLandmarks(currentLandmarks);
    const newSample = { letter, landmarks: flat };
    setSamples((prev) => [...prev, newSample]);
  };

  // 5. Download current samples
  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(samples, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "asl_training_data.json");
  };

  return (
    <div className="d-flex gap-2 position-absolute button-group">
      <div className="py-2 px-4 bg-white rounded shadow text-black">
        <label className="fw-bold">Letter:</label>
        <select
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          className="form-select w-auto d-inline-block"
        >
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>

      <button className="btn btn-primary py-2 px-4" onClick={recordSample}>
        Record Sample
      </button>

      <button
        className="btn btn-success py-2 px-4"
        onClick={downloadJSON}
        disabled={samples.length === 0}
      >
        Download Dataset ({samples.length})
      </button>
    </div>
  );
};
