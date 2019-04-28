import _ from "lodash";
import React from "react";
import Lightbox from "react-images";

export class PhotoWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false
    };
  }

  openLightbox = index => {
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  };

  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false
    });
  };

  gotoNextLightboxImage = () => {
    const { currentImage } = this.state;
    this.setState({currentImage: currentImage + 1});
  }

  gotoPrevLightboxImage = () => {
    const { currentImage } = this.state;
    this.setState({currentImage: currentImage - 1});
  }

  render() {
    const { photos } = this.props;
    const images = _.map(photos, p => {
      return {
        src: `static/img/gallery/${p}`,
        thumbnail: `static/img/gallery/thumbs/${p}`
      };
    });

    return (
      <>
        <div className="masonry">
          {photos.map((p, i) => {
            return (
              <div className="masonry-brick" key={i}>
                <img
                  onClick={() => this.openLightbox(i)}
                  src={`static/img/gallery/thumbs/${p}`}
                  className="img-fluid"
                />
              </div>
            );
          })}
        </div>

        <Lightbox
          currentImage={this.state.currentImage}
          images={images}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevLightboxImage}
          onClickNext={this.gotoNextLightboxImage}
          onClose={this.closeLightbox}
        />
      </>
    );
  }
}
