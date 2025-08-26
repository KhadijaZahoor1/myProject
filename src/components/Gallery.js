import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Gallery = ({ images }) => {
  const imgRef = useRef(images?.[0] || null);

  const setImgPreview = (url) => {
    imgRef.current.src = url;
  };

  useEffect(() => {
    imgRef.current.src = images?.[0];
  }, []);
  return (
    <>
      <div className=" rounded border-gray-200 border">
        <img
          src={images?.[0]}
          ref={imgRef}
          alt="Picture of the author"
          className="rounded w-[500px] h-[350px]"
        />
      </div>
      <div className="flex justify-center gap-2 items-center pt-4 pb-1">
        {images?.map((img, index) => (
          <div
            key={index}
            className="rounded border-gray-200 border hover:border-cyan-800"
            onClick={() => setImgPreview(img)}
          >
            <Image
              alt="small pics"
              src={img}
              width={100}
              height={100}
              className="rounded"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
