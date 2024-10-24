import React from "react";

function App() {
  const buildDate = process.env.REACT_APP_BUILD_DATE;
  const buildTime = process.env.REACT_APP_BUILD_TIME;

  // Log the values for debugging
  console.log("Build Date:", buildDate);
  console.log("Build Time:", buildTime);

  return (
    <div className="App">
      <h1>GitHub Build Information again</h1>
      {buildDate && buildTime ? (
        <p>
          <strong>Build Date:</strong> {buildDate} <br />
          <strong>Build Time:</strong> {buildTime}
        </p>
      ) : (
        <p>Build date and time not available.</p>
      )}
    </div>
  );
}

export default App;
