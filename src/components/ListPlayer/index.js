import React, { Component, Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconImg from "../IconImg";
import "./index.css";

class ListPlayer extends Component {
  state = {
    players: [
        {
          id:1,
          nome: "Marllon Nascimento Ramos",
          gol: 17,
          assistencia: 9,
          destaque: 10,
          hatTrick: 3,
          url:"https://avatars0.githubusercontent.com/u/22670119?v=4"
        },
        {
          id:2,
          nome: "Marllon Nascimento Ramos",
          gol: 17,
          assistencia: 9,
          destaque: 10,
          hatTrick: 3,
          url:"https://avatars0.githubusercontent.com/u/22670119?v=4"
        },
        {
          id:3,
          nome: "Marllon Nascimento Ramos",
          gol: 17,
          assistencia: 9,
          destaque: 10,
          hatTrick: 3,
          url:"https://avatars0.githubusercontent.com/u/22670119?v=4"
        },
        {
          id:4,
          nome: "Marllon Nascimento Ramos",
          gol: 17,
          assistencia: 9,
          destaque: 10,
          hatTrick: 3,
          url:"https://avatars0.githubusercontent.com/u/22670119?v=4"
        },
        {
          id:5,
          nome: "Marllon Nascimento Ramos",
          gol: 17,
          assistencia: 9,
          destaque: 10,
          hatTrick: 3,
          url:"https://avatars0.githubusercontent.com/u/22670119?v=4"
        },
        {
          id:6,
          nome: "Marllon Nascimento Ramos",
          gol: 17,
          assistencia: 9,
          destaque: 10,
          hatTrick: 3,
          url:"https://avatars0.githubusercontent.com/u/22670119?v=4"
        }
      ]
  };

  render() {
    return (
      <List className="list-player-root">
        {this.state.players.map(player=>
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
                </ListItem>
                <Divider variant="inset" component="li" />
            </Fragment>
        )}
      </List>
    );
  }
}

// // primeira tentativa com stateless
// const ListPlayer = () => {
//   return (
//     <List className="list-player-root">
//       <ListItem alignItems="flex-start">
//         <IconImg />
//         {/* <ListItemAvatar>
//                     <Avatar alt="Remy Sharp" src="https://avatars0.githubusercontent.com/u/22670119?v=4" />
//                 </ListItemAvatar> */}
//         <ListItemText
//           primary="Marllon Nascimento Ramos"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className="list-player-inline"
//                 color="textPrimary"
//               >
//                 Gol(s): 17
//               </Typography>
//               <br />
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className="list-player-inline"
//                 color="textPrimary"
//               >
//                 Assistência(s): 8
//               </Typography>
//               <br />
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className="list-player-inline"
//                 color="textPrimary"
//               >
//                 Jogador da partida: 10
//               </Typography>
//               <br />
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className="list-player-inline"
//                 color="textPrimary"
//               >
//                 Hat-trick(s): 2
//               </Typography>
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar
//             alt="Travis Howard"
//             src="https://avatars0.githubusercontent.com/u/22670119?v=4"
//           />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Summer BBQ"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className="list-player-inline"
//                 color="textPrimary"
//               >
//                 to Scott, Alex, Jennifer
//               </Typography>
//               {" — Wish I could come, but I'm out of town this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar
//             alt="Cindy Baker"
//             src="https://avatars0.githubusercontent.com/u/22670119?v=4"
//           />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className="list-player-inline"
//                 color="textPrimary"
//               >
//                 Sandra Adams
//               </Typography>
//               {" — Do you have Paris recommendations? Have you ever…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//     </List>
//   );
// };

export default ListPlayer;
