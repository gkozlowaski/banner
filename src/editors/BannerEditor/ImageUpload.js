import React from 'react';
import uploadImage from '../../services/Arquivos';
import arquivos from '../../../storefront/resources/arquivos.json';
import './ImageUpload.scss';

class ImageUpload extends React.Component {
  state = {
    uploading: false,
    errorMessage: ''
  }

  uploadImg = (file) => {
    this.setState({ uploading: true, errorMessage: '' });

    uploadImage(file)
    .then((response) => {
      this.uploadImgSuccess(file.name, response);
    })
    .catch((err) => {
      this.uploadImgFail(file.name, err);
    });
  }

  uploadImgSuccess = (fileName, response) => {
    if (response.status == 201) {
      this.setState({ uploading: false });
      this.props.updateUrl(`${arquivos.url}/${response.headers.location}`);
    } else {
      this.setState({
        uploading: false,
        errorMessage: 'Falha ao enviar'
      });
    }
  }

  uploadImgFail = (fileName, response) => {
    let errorMessage = '';
    if (response.status === 404) {
      errorMessage = 'Falha ao enviar';
    }

    if (response.data === 'File AlreadyExists') {
      errorMessage = `${response.data}`;
    }

    this.setState({
      uploading: false,
      errorMessage
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleFile = (e) => {
    let file = e.target.files[0];
    this.uploadImg(file);
  }

  handleImageClick = () => {
    this.fileUpload.click();
  }

  render() {
    return (
      <div
        className="form-group"
        encType="multipart/form-data"
        onSubmit={this.handleSubmit}
      >
        <div onClick={this.handleImageClick}>
          { this.props.children }
        </div>
        <input
          ref={(input) => this.fileUpload = input}
          style={{ display: 'none' }}
          onChange={this.handleFile}
          disabled={!this.props.editing}
          type="file"
          accept="image/*"
          name="file"
        />
        {
          this.state.errorMessage
            ? <div className="error-message" >
                <span className="glyphicon glyphicon-exclamation-sign"></span>
                <span className="error-message-text">{ this.state.errorMessage }</span>
              </div>
            : null
        }
        {
          this.state.uploading
            ? <div className="uploading-message" >
                <span className="glyphicon glyphicon-refresh glyphicon-spin"></span>
                <span className="uploading-message-text"> Uploading</span>
              </div>
            : null
        }
      </div>
    );
  }
}

export default ImageUpload;
