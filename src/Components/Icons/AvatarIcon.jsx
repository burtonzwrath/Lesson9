import { Avatar, ListItemAvatar } from "@mui/material";

export default function AvatarIcon({ todo }) {
  switch (todo.name) {
    case "PLAY FOOTBALL":
      return (
        <ListItemAvatar>
          <Avatar
            alt={`football`}
            src={`https://cdn-icons-png.flaticon.com/512/188/188864.png`}
          />
        </ListItemAvatar>
      );
    case "SWIMMING":
      return (
        <ListItemAvatar>
          <Avatar
            alt={`swim`}
            src={`https://cdn-icons-png.flaticon.com/512/186/186192.png`}
          />
        </ListItemAvatar>
      );
    case "CHILLING":
      return (
        <ListItemAvatar>
          <Avatar
            alt={`chil`}
            src={`https://cdn.iconscout.com/icon/free/png-256/chilling-chill-pool-side-swimming-umbrella-summer-8-22880.png`}
          />
        </ListItemAvatar>
      );
    case "READING":
      return (
        <ListItemAvatar>
          <Avatar
            alt={`read`}
            src={`https://cdn3.iconfinder.com/data/icons/education-248/128/48-512.png`}
          />
        </ListItemAvatar>
      );
    case "TEACHING":
      return (
        <ListItemAvatar>
          <Avatar
            alt={`teach`}
            src={`https://cdn-icons-png.flaticon.com/512/1089/1089129.png`}
          />
        </ListItemAvatar>
      );
    case "FISHING":
      return (
        <ListItemAvatar>
          <Avatar
            alt={`fish`}
            src={`https://cdn.iconscout.com/icon/premium/png-256-thumb/fishing-sea-1595207-1352816.png`}
          />
        </ListItemAvatar>
      );
    case "SHOPPING":
      return (
        <ListItemAvatar>
          <Avatar
            alt={`shop`}
            src={`https://cdn4.vectorstock.com/i/1000x1000/08/63/man-doing-shopping-flat-concept-icon-guy-hurry-up-vector-30140863.jpg`}
          />
        </ListItemAvatar>
      );
    default:
      return (
        <ListItemAvatar>
          <Avatar
            alt={`def`}
            src={`https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/512/new-icon.png`}
          />
        </ListItemAvatar>
      );
  }
}
