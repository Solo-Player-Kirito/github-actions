// import { error } from "console";
import { useEffect, useState } from "react";
import React from "react";

function MyDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    // Fetch the latest date from the file (if stored in a separate file like `date.json`)
    fetch("/date.json")
      .then((response) => response.json())
      .then((data) => setDate(data.date))
      .catch((error) => console.error("Error fetching date:", error));
  }, []);

  return (
    <>
      <div>latest date: {date || "date Loading...."}</div>
    </>
  );
}

export default MyDate;
