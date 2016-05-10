import React from 'react';
import ImageCard from './ImageCard';

class SliderImagesSettings extends React.Component {
  getImageList(images) {
    if (!images.length) {
      return (
        <p className="BannerEditor__title">
          No image uploaded
        </p>
      );
    }

    const imagesComponents = [];
    images.forEach((image, i) => {
      imagesComponents.push(<ImageCard updateImage={this.updateImage.bind(this)}
      removeImage={this.removeImage.bind(this)} index={i} key={i} {...image} />)
    })

    return imagesComponents;
  }

  updateImage(image, index) {
    // TODO - Refactor single image array
    if (this.props.images.length === 0) {
      this.props.updateSettings({images: [image]});
    } else {
      let updatedImages = [
        ...this.props.images.slice(0, index),
        image,
        ...this.props.images.slice(index + 1)
      ]
      this.props.updateSettings({images: updatedImages})
    }
  }

  addImage() {
    let images = this.props.images.concat({
      url: null,
      alt: null,
      link: null,
      editing: true
    })
    this.props.updateSettings({images});
  }

  removeImage(index) {
    this.props.images.splice(index, 1);
    this.props.updateSettings(this.props.images);
  }

  render() {
    let Images = this.getImageList(this.props.images);

    return (
      <form className="BannerEditor__form">
        <div className="BannerEditor__form-wrapper">
          <p className="BannerEditor__title--big">
            Images
          </p>
          { Images }
          <button
            type="button"
            onClick={this.addImage.bind(this)}
            className="btn btn-default btn-block btn-lg"
          >
            + Add Image
          </button>
        </div>
      </form>
    );
  }
}
export default SliderImagesSettings;
