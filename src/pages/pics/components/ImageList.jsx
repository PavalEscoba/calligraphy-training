import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const renderContent = (images) => {
    return (
      <div className="pic-container">
        {images
          .sort((imageOne, imageTwo) => imageTwo.likes - imageOne.likes)
          .map((image) => {
            return <ImageCard key={image.id} image={image} />;
          })}
      </div>
    );
  };
  return !images.length ? (
    <p> Please submit your search request.</p>
  ) : (
    renderContent(images)
  );
};

export default ImageList;
