import Webcam from "react-webcam";
import { useRef, useState } from "react";
function App() {
  const webRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const showImage = () => {
    console.log(webRef.current.getScreenshot());
    setPreviewImage(webRef.current.getScreenshot());
  };
  return (
    <div>
      React Webcam
      <Webcam ref={webRef} screenshotFormat="image/jpeg" />
      <button
        onClick={() => {
          showImage();
        }}
      >
        Show Image in console
      </button>
      <img src={previewImage} />
    </div>
  );
}

export default App;
