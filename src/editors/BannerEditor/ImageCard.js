import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props }
  }

  getImage (url) {
    if (url) {
      return (<img src={url} />)
    }
    if (!url) {
      return (<div className="v-banner-ed-img-placeholder">IMAGEM</div>)
    }
  }

  updateUrl (e) {
    let url = e.target.value;
    this.setState({url});
  }

  updateLink (e) {
    let link = e.target.value;
    this.setState({link});
  }

  updateAlt (e) {
    let alt = e.target.value;
    this.setState({alt});
  }

  editImage () {
    this.setState({editing: true});
  }

  updateImage () {
    let editing = { editing: false };
    let updatedImage = {
      ...this.state,
      ...editing
    }

    this.setState(editing);
    this.props.updateImage(updatedImage, this.props.index);
  }

  render() {
    let Image = this.getImage(this.state.url);
    let editing = this.state.editing;
    let AddButton, Edit;
    if (editing) {
      AddButton = (
        <div className="col-xs-12">
          <button type="button" onClick={this.updateImage.bind(this)} className="btn btn-primary pull-right">Salvar</button>
        </div>
      );
    } else {
      Edit = (
        <button type="button" onClick={this.editImage.bind(this)} className="btn btn-link btn-sm btn-block text-center">Editar</button>
      )
    }
    let modeClass = editing ? 'v-banner-ed-img-editing' : 'v-banner-ed-img-visualization';
    return (
      <div className={modeClass}>
        <div className="row">
          <div className="v-banner-ed-img">
            <div className="col-xs-6">
              {Image}
              {Edit}
            </div>
            <div className="col-xs-6">
              <div className="form-group">
                <label for="url">URL da imagem</label>
                <input type="url" disabled={!editing} value={this.state.url} onChange={this.updateUrl.bind(this)} className="form-control" id="url" />
              </div>

              <div className="form-group">
                <label for="link">
                  Link de destino
                </label>
                <input type="url" disabled={!editing} value={this.state.link} onChange={this.updateLink.bind(this)} className="form-control" id="link" />
              </div>

              <div className="form-group">
                <label for="alt">
                  Alt da imagem
                </label>
                <input type="text" disabled={!editing}  value={this.state.alt} onChange={this.updateAlt.bind(this)} className="form-control" id="alt" />
              </div>
            </div>
            {AddButton}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
