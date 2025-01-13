import { HashRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import Desktop from "./Desktop";

function App() {
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div>
      <div>
        <Router>
          <Desktop />
        </Router>
      </div>
    </div>
  );
}

export default App;
