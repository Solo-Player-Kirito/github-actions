import React from "react";

function App() {
  // Access the environment variables passed from GitHub Actions
  const buildDate = process.env.REACT_APP_BUILD_DATE;
  const buildTime = process.env.REACT_APP_BUILD_TIME;

  return (
    <div className="App">
      <h1>GitHub Build Information</h1>
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
