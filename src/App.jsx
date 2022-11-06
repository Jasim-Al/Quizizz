import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Card from "./components/shared/Card";

function App() {
  const [start, setStart] = useState(false);
  return (
    <div className="App">
      <div>
        {start ? (
          <Outlet />
        ) : (
          <Card className="button" onClick={() => setStart(true)}>
            Start
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
