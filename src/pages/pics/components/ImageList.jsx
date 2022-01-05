import React from "react";

const ImageList = ({ images }) => {
  console.log(images);

  const renderContent = (images) => {
    const figcaptionRender = (image) => {
      return (
        <>
          <figcaption>
            {image.description ? (
              <p className="pic__title">{image.description}</p>
            ) : null}
            <p>
              Made by:{" "}
              <span className="pic__desc">
                {image.user.instagram_username ? (
                  <a
                    href={`https://instagram.com/${image.user.instagram_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {image.user.name}
                  </a>
                ) : (
                  <span className="pic__deck">{image.user.name}</span>
                )}
              </span>
            </p>
            <p>
              Date:{" "}
              <span className="pic__desc">
                {image.user.updated_at.substring(0, 10)}
              </span>
            </p>
            <p>
              ❤ : <span className="pic__desc">{image.likes}</span>
            </p>
          </figcaption>
        </>
      );
    };
    console.log(images);
    return (
      <div className="pic-container">
        {images
          .sort((imageOne, imageTwo) => imageTwo.likes - imageOne.likes)
          .map((image) => {
            return (
              <figure key={image.id} className="pic__wrapper">
                <img
                  src={image.urls.small}
                  title={image.alt_description}
                  alt={image.alt_description}
                  className="pic__img"
                />
                {figcaptionRender(image)}
              </figure>
            );
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
