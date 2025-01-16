import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Desktop from "./Desktop.jsx";
import "./App.css";

function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [logs, setLogs] = useState([]);
  const [bootTimer, setBootTimer] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    // Simulating the boot process with log updates
    const processes = [
      "Started Apply Kernel Variables.",
      "Mounted Kernel Debug File System",
      "Mounted POSIX Message Queue File System.",
      "Started Read and set NIS domain name from /etc/sysconfig/network.",
      "Activated swap /dev/mapper/cl-swap.",
      "Started Remount Root and Kernel File Systems.",
      "Started Create Static Device Nodes in /dev.",
      "Created slice system-lvm2\x2dpvscan.slice.",
      "Reached target Local File Systems (Pre).",
      "Started LVM event activation on device 8:2",
      "Mounted /boot.",
      "Started desktop environment.",
    ];

    let index = 0;
    const logInterval = setInterval(() => {
      setLogs((prevLogs) => [...prevLogs, processes[index]]);
      index += 1;
      if (index === processes.length) {
        clearInterval(logInterval);
        setBootTimer(500); // After all logs are shown, wait for 0.5 seconds before transitioning
      }
    }, 250);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearInterval(logInterval);
    };
  }, []);

  useEffect(() => {
    if (bootTimer > 0) {
      setTimeout(() => {
        setIsFadingOut(true); // Start the fade-out transition
        setTimeout(() => setIsBooting(false), 1000); // After 1 second, hide the boot screen
      }, bootTimer);
    }
  }, [bootTimer]);

  return (
    <>
      {isBooting ? (
        <div className={`boot-screen ${isFadingOut ? "fade-out" : ""}`}>
          <div className="terminal">
            <div>
              {logs.map((log, index) => (
                <div key={index}>
                  [<span className="ok"> OK </span>] {log}
                </div>
              ))}
            </div>
            <div className="loading-text">_</div>
          </div>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Desktop />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
