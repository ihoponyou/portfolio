import { useState } from "react";

interface Props {
  images: string[];
}

function ImageGallery({ images }: Props) {
  const [index, setIndex] = useState(0);

  function incrementIndex() {
    setIndex(index + 1 >= images.length ? 0 : index + 1);
  }

  function decrementIndex() {
    setIndex(index - 1 <= -1 ? images.length - 1 : index - 1);
  }

  return (
    <div className="text-center">
      <img src={images[index]} alt="" />
      <br />
      <div className="text-center">
        <button className="btn mx-3" onClick={decrementIndex}>
          <i className="bi bi-arrow-left"></i>
        </button>
        {index + 1}/{images.length}
        <button className="btn mx-3" onClick={incrementIndex}>
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default ImageGallery;
