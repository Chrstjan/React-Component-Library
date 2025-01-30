import { useEffect } from "react";
import { useState } from "react";

export const UseImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const imageFiles = import.meta.glob("/public/*");
      const imagePaths = Object.keys(imageFiles);
      const imagesArray = imagePaths.map((item) => item);

      setImages(imagesArray);
    };
    getImages();
  }, []);

  return { images };
};
