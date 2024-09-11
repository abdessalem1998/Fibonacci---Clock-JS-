
import { useEffect, useState } from "react";
import TableLayout from "./component/display"
import { findCombinations, findDisplay } from "./utils/findDisplay";

function App() {
  const [hour, setHour] = useState(1);
  const [minutes, setMinutes] = useState(0);
  const [display, setDisplay] = useState(["white", "white", "white", "white", "white"])
  useEffect(() => {
    if (minutes > 55) {
      setMinutes(0);
      setHour(prevHours => prevHours + 1);
    }
    if (minutes < 0) {
      setMinutes(55);
      setHour(prevHours => prevHours - 1);
    }
    setDisplay(findDisplay(findCombinations(minutes / 5), findCombinations(hour)))
  }, [minutes]);
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{ width: "60%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ textAlign: "center" }}>Fibonacci - Clock:</h1>
        <div>
          <TableLayout display={display[0]} />
          <div style={{ fontSize: "30px",textAlign:"center" }}>
            {hour}:{minutes}
          </div>
          <div
            style={{
              width: "400px",
              display: "flex",
              fontSize: "30px",
              justifyContent: "space-between"
            }}>
            <button onClick={() => setMinutes(prevValue => prevValue - 5)}>
              back
            </button>
            <button onClick={() => setMinutes(prevValue => prevValue + 5)}>
              next
            </button>
          </div>
        </div>

      </div>
      <div style={{ width: "40%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>other displas</h1>
        <div style={{ height: "90vh", overflow: 'auto', }}>
          {
            display.slice(1).map((singleDisplay, index) =>
              <div key={index} style={{ marginBottom: "20px" }}>
                <TableLayout display={singleDisplay} />
              </div>
            )
          }
        </div>

      </div>
    </div>
  );
}

export default App;
