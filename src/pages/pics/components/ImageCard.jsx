import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    };

    this.imageRef = React.createRef();
    this.imageCaptionRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans)
  }

  setSpans = () => {
    const totalHeight = this.imageCaptionRef.current.clientHeight + this.imageRef.current.clientHeight;
    console.log(totalHeight);
    const spans = Math.ceil(totalHeight / 30) + 1;
    this.setState({spans});
  };

  render() {
    const { id, description, urls, alt_description, likes } = this.props.image;
    const { name, instagram_username, updated_at } = this.props.image.user;

    const figureRender = () => {
      console.log(this.props.image);
      return (
        <figure 
          style={{gridRowEnd: `span ${this.state.spans}`}} 
          key={id} 
          className="pic__wrapper">
          <img
            ref={this.imageRef}
            src={urls.full}
            title={alt_description}
            alt={alt_description}
            className="pic__img"
          />
          <figcaption ref={this.imageCaptionRef}>
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
    return  <>{figureRender()}</>;
  }
}

export default ImageCard;
