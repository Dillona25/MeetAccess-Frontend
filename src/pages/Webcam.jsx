import React, { useEffect, useRef, useState } from "react";
import { Hands } from "@mediapipe/hands";
import { useNavigate } from "react-router-dom";
import { LandmarkRecorder } from "../components/LandmarkRecorder";

export const Webcam = () => {
  const videoRef = useRef(null);
  const hands = useRef(null);
  const navigate = useNavigate();
  const [currentLandmarks, setCurrentLandmarks] = useState(null);

  useEffect(() => {
    let handsInstance;

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    const initializeHands = () => {
      // Access Hands from window (loaded via CDN script)
      const Hands = window.Hands;
      if (!Hands) {
        console.error("MediaPipe Hands not loaded");
        return;
      }

      handsInstance = new Hands({
        locateFile: (file) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
      });

      handsInstance.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.5,
      });

      handsInstance.onResults((results) => {
        if (
          results.multiHandLandmarks &&
          results.multiHandLandmarks.length > 0
        ) {
          setCurrentLandmarks(results.multiHandLandmarks[0]);
        } else {
          setCurrentLandmarks(null);
        }
      });

      hands.current = handsInstance;

      const detectHands = async () => {
        if (
          handsInstance &&
          videoRef.current &&
          videoRef.current.readyState === 4
        ) {
          try {
            await handsInstance.send({ image: videoRef.current });
          } catch (e) {
            console.error("Error in hands detection:", e);
          }
        }
        requestAnimationFrame(detectHands);
      };

      detectHands();
    };

    startCamera();
    initializeHands();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
      if (handsInstance && typeof handsInstance.close === "function") {
        handsInstance.close();
      }
      handsInstance = null;
    };
  }, []);

  const handleEndCall = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setTimeout(() => navigate("/"), 100);
  };

  return (
    <div className="position-fixed bg-black d-flex justify-content-center align-items-center flex-column camera-container">
      <video ref={videoRef} autoPlay playsInline className="camera-video" />
      <LandmarkRecorder currentLandmarks={currentLandmarks} />
      <button
        onClick={handleEndCall}
        className="btn btn-danger position-absolute text-white border-0 rounded py-2 px-4 video-btn cursor-pointer"
      >
        End Call
      </button>
    </div>
  );
};
