import React, { Component, Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconImg from "../IconImg";
import { Button } from "@material-ui/core";
import ModalCreatePlayer from "../ModalCreatePlayer";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from "@material-ui/core";

class CrudPlayer extends Component {
  state = {
    players: [
      {
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3,
        url:"https://avatars0.githubusercontent.com/u/22670119?v=4"
      },
      {
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3,
        url:"https://avatars0.githubusercontent.com/u/22670119?v=4"
      },
      {
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3,
        url:"https://avatars0.githubusercontent.com/u/22670119?v=4"
      },
      {
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3,
        url:"https://avatars0.githubusercontent.com/u/22670119?v=4"
      },
      {
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3,
        url:"https://avatars0.githubusercontent.com/u/22670119?v=4"
      },
      {
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3,
        url:"https://avatars0.githubusercontent.com/u/22670119?v=4"
      }
    ],
    open: false
  };

  render() {
    const { players, open } = this.state;

    const handleRemove = (id) => {
      console.log(id);
    };

    const handleUpdate = () => {
      console.log('Atualizado!');
      this.setState({ open: false });
    };

    const handleClickOpenUpdate = () => {
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
                <IconImg url={player.url} />
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
                        Jogador da partida: {player.destaque}
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
                <Button variant="contained" color="primary" onClick={handleClickOpenUpdate}>
                  <i className="fa fa-pen fa-1x"></i>
                </Button>
                &nbsp;&nbsp;
                <Button variant="contained" color="secondary" onClick={() => handleRemove(player.id)}>
                  <i className="fa fa-trash-alt fa-1x"></i>
                </Button>
              </ListItem>
              <Divider variant="inset" component="li" />
            </Fragment>
          ))}
        </List>
        <ModalCreatePlayer />
        <div>
          <Dialog open={open} onClose={handleCloseUpdate} aria-labelledby="form-dialog-title">
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
              />
              <TextField
                margin="dense"
                id="gol"
                label="Gol(s)"
                type="number"
                fullWidth
              />
              <TextField
                margin="dense"
                id="assistencia"
                label="Assistência(s)"
                type="number"
                fullWidth
              />
              <TextField
                margin="dense"
                id="destaque"
                label="Jogador da partida"
                type="number"
                fullWidth
              />
              <TextField
                margin="dense"
                id="hattrick"
                label="Hat-trick"
                type="number"
                fullWidth
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
