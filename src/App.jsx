import { useState, useEffect } from "react";
import SetUserName from "./components/SetUserName.jsx";
import Game from "./components/Game.jsx";
import Cookies from "js-cookie";

function App() {
  const [name, setName] = useState("");
  const [nameDone, setNameDone] = useState(false);

  useEffect(() => {
    const userName = Cookies.get("name");

    if (userName) {
      setName(userName);
      setNameDone(true);
    }
  }, []);

  return (
    <>
      {nameDone ? (
        <p>
          <Game />
        </p>
      ) : (
        <SetUserName name={name} setName={setName} />
      )}
    </>
  );
}

export default App;
