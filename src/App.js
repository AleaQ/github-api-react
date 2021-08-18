import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [repo, setRepoData] = useState([]);

  const gitHubUrl =
    "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&page=1&per_page=100";

  const getApiData = async () => {
    try {
      const response = await axios.get(gitHubUrl);
      setRepoData(response.data);
      console.log("response", response.data.items);
    } catch (error) {
      console.log("api error", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  return <div className="App"></div>;
}

export default App;
