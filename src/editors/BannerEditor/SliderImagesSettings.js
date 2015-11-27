import React from 'react';
import ImageCard from './ImageCard';

class SliderImagesSettings extends React.Component {
  getImageList(images) {
    if (!images.length) {
      return ( <p>Nenhuma imagem cadastrada</p> )
    }

    const imagesComponents = [];
    images.forEach((image, i) => {
      imagesComponents.push(<ImageCard updateImage={this.updateImage.bind(this)} index={i} key={i} {...image} />)
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

  render() {
    let Images = this.getImageList(this.props.images);

    return (
      <form className="v-banner-ed__form">
        <div className="v-banner-ed__form__wrapper">
          <h2>Imagens</h2>
          {Images}
          <button type="button" onClick={this.addImage.bind(this)} className="btn btn-default btn-block btn-lg">+ Adicionar imagem</button>
        </div>
      </form>
    );
  }
}

export default SliderImagesSettings;
