import UserItem from "./UserItem";
import {
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@mui/material";

export default function UsersList({
  users,
  removeUser,
  onItemClick = { onItemClick },
}) {
  return (
    <TableContainer>
      <Table sx={{ width: "800px", marginLeft: "50px", marginTop: "50px" }}>
        <TableHead>
          <TableRow >
            <TableCell> </TableCell>
            <TableCell sx={{  fontSize:"30px"}}>NAME</TableCell>
            <TableCell sx={{  fontSize:"30px"}}>SURNAME</TableCell>
            <TableCell sx={{  fontSize:"30px"}}>PHONE</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((item, index) => (
            <UserItem
              key={index}
              id={index}
              user={item}
              removeUser={removeUser}
              onItemClick={onItemClick}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
