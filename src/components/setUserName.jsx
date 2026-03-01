import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";

const Name2Cookie = ({ name }) => {
  Cookies.set("name", { name });
};

const SetUserName = ({ setName }) => {
  return (
    <>
      <TextField
        id="userName"
        label="Standard"
        variant="standard"
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={Name2Cookie}>Start</Button>
    </>
  );
};

export default SetUserName;
