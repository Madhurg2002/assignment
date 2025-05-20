import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(getCurrentTime());

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="text-xl font-mono text-center">
      {time}
    </div>
  );
};

export default Clock;
