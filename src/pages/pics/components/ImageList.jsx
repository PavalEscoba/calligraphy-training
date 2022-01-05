import React from 'react';

const ImageList = ({ images }) => {
  console.log(images);

  const renderContent = (images) => {
    return (
        <div className="pic-container">
          {
            images.map(image => {
              return (
                <figure key={image.id} className="pic__wrapper">
                  <img 
                    src={image.urls.small}
                    title={image.alt_description} 
                    alt={image.alt_description} 
                    className="pic__img" 
                  />
                  <figcaption>
                    <p>Made by: <span className='pic__desc'>
                      <a href={`https://instagram.com/${image.user.instagram_username}`} target="_blank">{image.user.name}</a>
                      </span>
                    </p>
                    <p>Date: <span className='pic__desc'>{image.user.updated_at.substring(0, 10)}</span></p>
                    <p>❤ : <span className='pic__desc'>{image.likes}</span></p> 
                  </figcaption>
                </figure>
              )
            })
          }
        </div>
    )
  }
  return !images.length ? <p> Please submit your search request.</p> : renderContent(images);
};

export default ImageList;
