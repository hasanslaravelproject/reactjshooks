import React, { useState, useEffect } from "react";
import Api from "./Api.js";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [client, setClientInfo] = useState([]);
  const [report, setReportInfo] = useState([]);
  const loadPost = async () => {
    setLoading(true);
    Api.makeGetRequest("clients", "reports").then(
      axios.spread((...allData) => {
        const clientData = allData[0].data.data;
        const reportData = allData[1].data.data;

        setClientInfo(clientData);
        setReportInfo(reportData);
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
              
              <th className="">hotdishmeat</th>
              <th className="">hotdishveg</th>
              <th className="">chili</th>
              <th className="">rye</th>
              <th className="">extrarye</th>
              <th className="">rextrafocaccia</th>
              <th className="">focaccia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <>
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
              </>
              <td>
                <tr>
                  {report.map((item) => {
                    return (
                      <tr key={item.id}>
                        <tr>
                          <td>{item.hotdishmeat / 10}</td>
                        </tr>

                        {item.hotdishmeat / 10 < 5 ? "half" : "full"}
                        {item.hotdishveg / 10 < 5 ? "half" : "full"}
                        {item.chili / 10 < 5 ? "half" : "full"}
                        {item.rye / 10 < 5 ? "half" : "full"}
                        {item.extrarye / 10 < 5 ? "half" : "full"}
                        {item.focaccia / 10 < 5 ? "half" : "full"}
                        {item.extrafocaccia / 10 < 5 ? "half" : "full"}

                        <td>{item.hotdishveg / 10}</td>
                        <td>{item.chili / 10}</td>
                        <td>{item.rye / 10}</td>
                        <td>{item.extrarye / 10}</td>
                        <td>{item.focaccia / 10}</td>
                        <td>{item.extrafocaccia / 10}</td>
                      </tr>
                    );
                  })}
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
