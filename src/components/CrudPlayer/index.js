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
import { TextField } from "@material-ui/core";
import {
  getPlayers,
  updatePlayer,
  deletePlayer
} from "../../services";

class CrudPlayer extends Component {
  state = {
    players: [],
    open: false,
    idInput: "",
    nomeInput: "",
    golInput: 0,
    assistenciaInput: 0,
    jogadorDaPartidaInput: 0,
    hatTrickInput: 0
  };

  async componentDidMount() {
    const listPlayers = await getPlayers();
    this.setState({ players: listPlayers.data });
  }

  render() {
    const { players, open } = this.state;

    const handleRemove = id => {
      deletePlayer(id);
    };

    const handleUpdate = () => {
      const player = {
        id: this.state.idInput,
        nome: this.state.nomeInput,
        gol: this.state.golInput,
        assistencia: this.state.assistenciaInput,
        jogadorDaPartida: this.state.jogadorDaPartidaInput,
        hatTrick: this.state.hatTrickInput, 
        foto: ""
      };
      
      updatePlayer(player);
      this.setState({ open: false });
    };

    const handleClickOpenUpdate = player => {
      this.setState({
        idInput: player.id,
        nomeInput: player.nome,
        golInput: player.gol,
        assistenciaInput: player.assistencia,
        jogadorDaPartidaInput: player.jogadorDaPartida,
        hatTrickInput: player.hatTrick
      });
      this.setState({ open: true });
    };

    const handleCloseUpdate = () => {
      this.setState({ open: false });
    };

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
                  onClick={() => handleClickOpenUpdate(player)}
                >
                  <i className="fa fa-pen fa-1x"></i>
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleRemove(player.id)}
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
            onClose={handleCloseUpdate}
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
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseUpdate} color="secondary">
                Cancelar
              </Button>
              <Button onClick={handleUpdate} color="primary">
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
