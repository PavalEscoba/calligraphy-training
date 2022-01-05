import React from "react";

class ImageCard extends React.Component {
  constructor() {
    super();
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", () => {
      console.log(this.imageRef.current.clientHeight);
    });
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { id, description, urls, alt_description, likes } = this.props.image;
    const { name, instagram_username, updated_at } = this.props.image.user;

    const figureRender = () => {
      return (
        <figure ref={this.imageRef} key={id} className="pic__wrapper">
          <img
            src={urls.small}
            title={alt_description}
            alt={alt_description}
            className="pic__img"
          />
          <figcaption>
            {description ? <p className="pic__title">{description}</p> : null}
            <p>
              Made by:{" "}
              <span className="pic__desc">
                {instagram_username ? (
                  <a
                    href={`https://instagram.com/${instagram_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {name}
                  </a>
                ) : (
                  <span className="pic__deck">{name}</span>
                )}
              </span>
            </p>
            <p>
              Date:{" "}
              <span className="pic__desc">{updated_at.substring(0, 10)}</span>
            </p>
            <p>
              ❤ : <span className="pic__desc">{likes}</span>
            </p>
          </figcaption>
        </figure>
      );
    };
    return <div> {figureRender()} </div>;
  }
}

export default ImageCard;
