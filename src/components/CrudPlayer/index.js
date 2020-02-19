import React, { Component, Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconImg from "../IconImg";
import { Button } from "@material-ui/core";
import ModalCreatePlayer from "../ModalCreatePlayer";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField, Checkbox, FormControlLabel } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import {
  getPlayers,
  updatePlayer,
  deletePlayer
} from "../../services";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class CrudPlayer extends Component {
  state = {
    players: [],
    open: false,
    idInput: "",
    nomeInput: "",
    golInput: 0,
    assistenciaInput: 0,
    jogadorDaPartidaInput: 0,
    hatTrickInput: 0,
    croppedImageUrl: "",
    src: null,
    crop: {
      unit: "%",
      width: 30,
      aspect: 16 / 16
    },
    checkedFoto: false
  };

  async componentDidMount() {
    const listPlayers = await getPlayers();
    this.setState({ players: listPlayers.data });
  }

  handleRemove = id => {
    deletePlayer(id);
  };

  handleCloseUpdate = () => {
    this.setState({ open: false });
  };

  handleUpdate = async () => {
    const player = {
      id: this.state.idInput,
      nome: this.state.nomeInput,
      gol: this.state.golInput,
      assistencia: this.state.assistenciaInput,
      jogadorDaPartida: this.state.jogadorDaPartidaInput,
      hatTrick: this.state.hatTrickInput,
      foto: this.state.croppedImageUrl,
      updateFoto: this.state.checkedFoto,
    };

    await updatePlayer(player);
    this.setState({ open: false });
  };

  handleClickOpenUpdate = player => {
    this.setState({
      idInput: player.id,
      nomeInput: player.nome,
      golInput: player.gol,
      assistenciaInput: player.assistencia,
      jogadorDaPartidaInput: player.jogadorDaPartida,
      hatTrickInput: player.hatTrick,
      croppedImageUrl: player.foto,
    });
    this.setState({ open: true });
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

  handleChangeCheckFoto = () => {
    const { checkedFoto } = this.state;
    this.setState({ checkedFoto: !checkedFoto });
  }

  render() {
    const { crop, croppedImageUrl, src, players, open } = this.state;

    return (
      <Fragment>
        <List className="list-player-root">
          {players.map(player => (
            <Fragment key={player.id}>
              <ListItem alignItems="flex-start">
                <IconImg url={player.foto} />
                <ListItemText
                  primary={player.nome}
                  secondary={
                    <Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className="list-player-inline"
                        color="textPrimary"
                      >
                        Gol(s): {player.gol}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="body2"
                        className="list-player-inline"
                        color="textPrimary"
                      >
                        Assistência(s): {player.assistencia}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="body2"
                        className="list-player-inline"
                        color="textPrimary"
                      >
                        Jogador da partida: {player.jogadorDaPartida}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="body2"
                        className="list-player-inline"
                        color="textPrimary"
                      >
                        Hat-trick(s): {player.hatTrick}
                      </Typography>
                    </Fragment>
                  }
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.handleClickOpenUpdate(player)}
                >
                  <i className="fa fa-pen fa-1x"></i>
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => this.handleRemove(player.id)}
                >
                  <i className="fa fa-trash-alt fa-1x"></i>
                </Button>
              </ListItem>
              <Divider variant="inset" component="li" />
            </Fragment>
          ))}
        </List>
        <ModalCreatePlayer />
        <div>
          <Dialog
            open={open}
            onClose={this.handleCloseUpdate}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Atualizar Jogador</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="nome"
                label="Nome"
                type="text"
                fullWidth
                disabled={true}
                value={this.state.nomeInput}
                onChange={e => this.setState({ nomeInput: e.target.value })}
              />
              <TextField
                margin="dense"
                id="gol"
                label="Gol(s)"
                type="number"
                fullWidth
                value={this.state.golInput}
                onChange={e => this.setState({ golInput: e.target.valueAsNumber })}
              />
              <TextField
                margin="dense"
                id="assistencia"
                label="Assistência(s)"
                type="number"
                fullWidth
                value={this.state.assistenciaInput}
                onChange={e =>
                  this.setState({ assistenciaInput: e.target.valueAsNumber })
                }
              />
              <TextField
                margin="dense"
                id="destaque"
                label="Jogador da partida"
                type="number"
                fullWidth
                value={this.state.jogadorDaPartidaInput}
                onChange={e =>
                  this.setState({ jogadorDaPartidaInput: e.target.valueAsNumber })
                }
              />
              <TextField
                margin="dense"
                id="hattrick"
                label="Hat-trick"
                type="number"
                fullWidth
                value={this.state.hatTrickInput}
                onChange={e => this.setState({ hatTrickInput: e.target.valueAsNumber })}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedFoto}
                    onChange={this.handleChangeCheckFoto}
                    value={this.state.checkedFoto}
                    color="primary"
                    id="chkPhoto"
                    name="chkPhoto"
                  />
                }
                label="Atualizar Foto?"
              />
              <br />
              <input
                id="foto"
                type="text"
                hidden="hidden"
                value={this.state.croppedImageUrl}
                readOnly
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
              <Button onClick={this.handleCloseUpdate} color="secondary">
                Cancelar
              </Button>
              <Button onClick={this.handleUpdate} color="primary">
                Atualizar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

export default CrudPlayer;
