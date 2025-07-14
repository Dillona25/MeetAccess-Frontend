import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Webcam = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Async function to start camera
    const startCamera = async () => {
      try {
        // Setting strea variable to the users video
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

    // Calling our function
    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  // Function to handle ending video
  const handleEndCall = () => {
    const video = videoRef.current;
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      video.srcObject = null;
    }
    setTimeout(() => navigate("/"), 100);
  };

  return (
    <div className="position-fixed bg-black d-flex justify-content-center align-items-center flex-column camera-container">
      <video ref={videoRef} autoPlay playsInline className="camera-video" />
      <button
        onClick={handleEndCall}
        className="btn btn-danger position-absolute text-white border-0 rounded py-2 px-4 video-btn cursor-pointer"
      >
        End Call
      </button>
    </div>
  );
};
