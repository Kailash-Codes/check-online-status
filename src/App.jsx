import React from "react";
import { useOnlineStatus } from "./hooks/useOnlineStatus";

const App = () => {
  const [online] = useOnlineStatus();
  return (
    <div>
      <p>
        You are currently <b>{online ? "online" : "offline"}</b>
      </p>
    </div>
  );
};

export default App;
