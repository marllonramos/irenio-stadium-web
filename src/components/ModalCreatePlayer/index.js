import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Fab, TextField } from "@material-ui/core";
import { insertPlayer } from "../../services";

class ModalCreatePlayer extends Component {
  state = {
    open: false,
    nomeInsertInput: "",
    golInsertInput: 0,
    assistenciaInsertInput: 0,
    jogadorDaPartidaInsertInput: 0,
    hatTrickInsertInput: 0,
    fotoInsertInput: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInsert = () => {
    const player = {
      nome: this.state.nomeInsertInput, 
      gol: this.state.golInsertInput, 
      assistencia: this.state.assistenciaInsertInput, 
      jogadorDaPartida: this.state.jogadorDaPartidaInsertInput, 
      hatTrick: this.state.hatTrickInsertInput, 
      foto: ""
    }
    
    insertPlayer(player);
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

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
              label="Nome"
              type="text"
              fullWidth
              value={this.state.nomeInsertInput}
              onChange={e=>this.setState({ nomeInsertInput: e.target.value })}
            />
            <TextField
              margin="dense"
              id="gol"
              label="Gol(s)"
              type="number"
              fullWidth
              value={this.state.golInsertInput}
              onChange={e => this.setState({ golInsertInput: e.target.valueAsNumber })}
            />
            <TextField
              margin="dense"
              id="assistencia"
              label="Assistência(s)"
              type="number"
              fullWidth
              value={this.state.assistenciaInsertInput}
              onChange={e=> this.setState({
                assistenciaInsertInput: e.target.valueAsNumber
              })}
            />
            <TextField
              margin="dense"
              id="destaque"
              label="Jogador da partida"
              type="number"
              fullWidth
              value={this.state.jogadorDaPartidaInsertInput}
              onChange={e=> this.setState({
                jogadorDaPartidaInsertInput: e.target.valueAsNumber
              })}
            />
            <TextField
              margin="dense"
              id="hattrick"
              label="Hat-trick"
              type="number"
              fullWidth
              value={this.state.hatTrickInsertInput}
              onChange={e=> this.setState({ hatTrickInsertInput: e.target.valueAsNumber })}
            />
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
