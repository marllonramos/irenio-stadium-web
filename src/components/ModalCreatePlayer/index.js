import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { Fab, TextField } from "@material-ui/core";
import { insertPlayer } from "../../services";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class ModalCreatePlayer extends Component {
  state = {
    open: false,
    nomeInsertInput: "",
    golInsertInput: 0,
    assistenciaInsertInput: 0,
    jogadorDaPartidaInsertInput: 0,
    hatTrickInsertInput: 0,
    src: null,
    crop: {
      unit: "%",
      width: 30,
      aspect: 16 / 16
    }
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInsert = async () => {
    const player = {
      nome: this.state.nomeInsertInput,
      gol: this.state.golInsertInput,
      assistencia: this.state.assistenciaInsertInput,
      jogadorDaPartida: this.state.jogadorDaPartidaInsertInput,
      hatTrick: this.state.hatTrickInsertInput,
      foto: this.state.croppedImageUrl,
    }

    await insertPlayer(player);
    this.setState({ open: false });
  };

  handleEditPicture = () => {
    const fileInput = document.querySelector('#imageInput');
    fileInput.click();
  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = image => {
    this.imageRef = image;
  };
  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };
  onCropChange = (crop) => {
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Image = canvas.toDataURL('image/jpeg');

    return base64Image;
  }

  render() {
    const { crop, croppedImageUrl, src, open } = this.state;

    return (
      <div>
        <Fab color="primary" aria-label="add" onClick={this.handleClickOpen}>
          <i className="fa fa-plus fa-2x"></i>
        </Fab>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Cadastrar Jogador</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="nome"
              name="nome"
              label="Nome"
              type="text"
              fullWidth
              value={this.state.nomeInsertInput}
              onChange={e => this.setState({ nomeInsertInput: e.target.value })}
            />
            <TextField
              margin="dense"
              id="gol"
              name="gol"
              label="Gol(s)"
              type="number"
              fullWidth
              value={this.state.golInsertInput}
              onChange={e => this.setState({ golInsertInput: e.target.valueAsNumber })}
            />
            <TextField
              margin="dense"
              id="assistencia"
              name="assistencia"
              label="Assistência(s)"
              type="number"
              fullWidth
              value={this.state.assistenciaInsertInput}
              onChange={e => this.setState({
                assistenciaInsertInput: e.target.valueAsNumber
              })}
            />
            <TextField
              margin="dense"
              id="destaque"
              name="destaque"
              label="Jogador da partida"
              type="number"
              fullWidth
              value={this.state.jogadorDaPartidaInsertInput}
              onChange={e => this.setState({
                jogadorDaPartidaInsertInput: e.target.valueAsNumber
              })}
            />
            <TextField
              margin="dense"
              id="hattrick"
              name="hattrick"
              label="Hat-trick"
              type="number"
              fullWidth
              value={this.state.hatTrickInsertInput}
              onChange={e => this.setState({ hatTrickInsertInput: e.target.valueAsNumber })}
            />
            <input
              id="foto"
              type="text"
              hidden="hidden"
              value={this.state.croppedImageUrl}
            />
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              hidden="hidden"
              onChange={this.onSelectFile}
            />
            {src && (
              <ReactCrop
                src={src}
                crop={crop}
                ruleOfThirds
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
              />
            )}
            {croppedImageUrl && (
              <img alt="Crop" style={{ maxWidth: "100%" }} src={croppedImageUrl} />
            )}
            <IconButton onClick={this.handleEditPicture} className="button">
              <PhotoCamera color="primary" fontSize="large" />
            </IconButton>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancelar
            </Button>
            <Button onClick={this.handleInsert} color="primary">
              Cadastrar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ModalCreatePlayer;
