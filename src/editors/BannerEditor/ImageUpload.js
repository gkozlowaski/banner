import React from 'react';
import uploadImage from '../../services/Arquivos';

class ImageUpload extends React.Component {
  state = {
    uploading: false,
    errorMessage: ''
  }

  uploadImg = (file) => {
    this.setState({ uploading: true });

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
      this.props.updateUrl(`http://vtex-fs-env-beta.elasticbeanstalk.com/${response.headers.location}`);
    } else {
      this.setState({
        uploading: false,
        errorMessage: 'Upload failed ):'
      });
    }
  }

  uploadImgFail = (fileName, response) => {
    let errorMessage = response.data === 'File AlreadyExists' ? `$:{response.data}` : '';
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

  handleImageTap = () => {
    this.fileUpload.click();
  }

  render() {
    return (
      <div
        className="form-group"
        encType="multipart/form-data"
        onSubmit={this.handleSubmit}
      >
        <div onTouchTap={this.handleImageTap}>
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
          this.state.errorMessage ?
            <span>Uploading fail { this.state.errorMessage }</span> : null
        }
        {
          this.state.uploading ?
            <span>Uploading...</span> : null
        }
      </div>
    );
  }
}

export default ImageUpload;
