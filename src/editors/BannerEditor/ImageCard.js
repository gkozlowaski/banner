import React from 'react';
import ImageUpload from './ImageUpload';

class ImageCard extends React.Component {
  state = {
    ...this.props
  }

  updateUrl = (url) => {
    this.setState({ url: url });
  }

  updateLink = (e) => {
    let link = e.target.value;
    this.setState({ link });
  }

  updateAlt = (e) => {
    let alt = e.target.value;
    this.setState({ alt });
  }

  editImage = () => {
    this.setState({ editing: true });
  }

  removeImage = () => {
    this.props.removeImage(this.props.index - 1);
  }

  updateImage = () => {
    let editing = { editing: false };
    let updatedImage = {
      ...this.state,
      ...editing
    };

    this.setState(editing);
    this.props.updateImage(updatedImage, this.props.index);
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  changeViewport = () => {
    this.setState({ mobile: !this.state.mobile })
  }

  render() {
    let editing = this.state.editing;
    let image = this.state.url ?
      ( <img src={this.state.url} /> ) :
      (
        <div
          className="v-banner-ed-img-placeholder"
          data-edit={editing}
        >
          {
            editing ?
              <span className="v-banner-ed-img-icon glyphicon glyphicon-upload"
              /> : null
          }
        </div>
      );
    let modeClass = editing ?
      'v-banner-ed-img-editing' : 'v-banner-ed-img-visualization';
    let addButton = editing ?
        (
          <div>
            <button
              type="button"
              onClick={this.updateImage}
              className="col-xs-12 btn btn-primary"
              style={{ marginBottom: '5px' }}
            >
              Save
            </button>
            <button
              type="button"
              onClick={this.removeImage}
              className="col-xs-12 btn btn-danger"
            >
              Delete
            </button>
          </div>
        ) : null;

    return (
      <div className={modeClass}>
        <div className="row">
          <div className="v-banner-ed-img">
            <div className={editing ? 'col-xs-12' : 'col-xs-5'} >
              {
                editing ?
                  <ImageUpload
                    editing={editing}
                    updateUrl={this.updateUrl}
                  >
                    { image }
                  </ImageUpload> :
                  image
              }
            </div>
            <div className={editing ? 'col-xs-12' : 'col-xs-7'}>
             <div className="form-group">
                <label className="radio-inline">
                  <input
                    type="radio"
                    id="banner-mobile"
                    checked={this.state.mobile}
                    onChange={this.changeViewport}
                    value={this.state.mobile}
                  />
                  Mobile
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="link">
                  Destination Link
                </label>
                <input
                  type="url"
                  disabled={!editing}
                  value={this.state.url}
                  onChange={this.updateLink}
                  className="form-control"
                  id="link"
                />
              </div>
              <div className="form-group">
                <label htmlFor="alt">
                  Image Alt-text
                </label>
                <input
                  type="text"
                  disabled={!editing}
                  value={this.state.alt}
                  onChange={this.updateAlt}
                  className="form-control"
                  id="alt"
                />
              </div>
            </div>
            {addButton}
          </div>
          <div className="v-banner-edit-btn-container">
            {
              editing ?
                null :
                <button
                  type="button"
                  className="col-xs-12 btn btn-primary v-banner-edit-btn"
                  onClick={this.handleEditClick}
                >
                  Edit
                </button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
