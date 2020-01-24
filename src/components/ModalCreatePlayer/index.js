import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Fab, TextField } from "@material-ui/core";
import { insertPlayer, updatePlayer, deletePlayer } from "../../services";

export default function ModalCreatePlayer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInsert = ()=>{
    console.log('Cadastrado!');
    setOpen(false);
  };

  return (
    <div>
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
            <i className="fa fa-plus fa-2x"></i>
        </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Cadastrar Jogador</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nome"
            label="Nome"
            type="text"
            fullWidth
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
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleInsert} color="primary">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
