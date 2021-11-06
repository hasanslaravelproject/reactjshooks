import React, { useState, useEffect } from "react";
import Api from "./Api.js";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [client, setClientInfo] = useState([]);
  const [food, setFoodInfo] = useState([]);
  const loadPost = async () => {
    setLoading(true);
    Api.makeGetRequest("clients", "all-food", "users").then(
      axios.spread((...allData) => {
        const clientData = allData[0].data.data;
        const foodData = allData[1].data.data;

        setClientInfo(clientData);
        setFoodInfo(foodData);
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    loadPost();
  }, []);
  return (
    <>
      <div className="App">
        <table className="">
          <thead className="">
            <tr>
              <th className="">Name</th>
              {food.map((item) => {
                return (
                  <th className="" style={{ width: "200px" }}>
                    <ul style={{ display: "inline", listStyleType: "none" }}>
                      <li style={{}}>{item.name}</li>
                    </ul>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {client.map((details) => {
              return (
                <tr>
                  <td>
                    <ul style={{ display: "block", listStyleType: "none" }}>
                      <li>{details.name}</li>
                    </ul>
                  </td>
                </tr>
              );
            })}

            <td>0.3%</td>
            <td>1.3%</td>
            <td>5.3%</td>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
