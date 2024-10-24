import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/info");
        setDetails(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: "inline-block" }}>
      {details.map((detail, index) => (
        <div
          key={detail.id}
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            borderRadius: "20px",
            margin: "10px",
            padding: "10px",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              backgroundColor: "brown",
              borderRadius: "5px",
              padding: "4px",
            }}
          >
            Name: {detail.name}
          </h2>
          <h2
            style={{
              backgroundColor: "green",
              borderRadius: "5px",
              padding: "4px",
            }}
          >
            Age: {detail.age}
          </h2>
          <h2
            style={{
              backgroundColor: "teal",
              borderRadius: "5px",
              padding: "4px",
            }}
          >
            lastName: {detail.lastName}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default App;
