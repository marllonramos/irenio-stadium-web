import React, { Component, Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconImg from "../IconImg";
import { Button } from "@material-ui/core";
import ModalCreatePlayer from "../ModalCreatePlayer";
// import "./index.css";

class CrudPlayer extends Component {
  state = {
    players: [
      {
        id: Math.random(),
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3
      },
      {
        id: Math.random(),
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3
      },
      {
        id: Math.random(),
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3
      },
      {
        id: Math.random(),
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3
      },
      {
        id: Math.random(),
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3
      },
      {
        id: Math.random(),
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3
      },
      {
        id: Math.random(),
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3
      },
      {
        id: Math.random(),
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3
      },
      {
        id: Math.random(),
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3
      },
      {
        id: Math.random(),
        nome: "Marllon Nascimento Ramos",
        gol: 17,
        assistencia: 9,
        destaque: 10,
        hatTrick: 3
      }
    ]
  };

  render() {
    const { players } = this.state;

    const handleRemove = (id) => {
        console.log(id);
    };

    return (
      <Fragment>
        <List className="list-player-root">
          {players.map(player => (
            <Fragment key={player.id}>
              <ListItem alignItems="flex-start">
                <IconImg />
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
                <Button variant="contained" color="primary">
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
      </Fragment>
    );
  }
}

export default CrudPlayer;
