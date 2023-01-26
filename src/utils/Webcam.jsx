import React, { useState } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 400,
  height: 375,
  facingMode: "user"
};

export const WebcamCapture = () => {
  const [image, setImage] = useState("");
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  });

  return (
    <div className="relative max-h-[100px] overflow-hidden border rounded-lg ml-4">
      <div className="w-20 h-16">
        {image === "" ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={375}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img id="screen-image" src={image} />
        )}
      </div>
      
    </div>
  );
};
