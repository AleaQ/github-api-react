import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Card from "./components/card/card";

function App() {
  const [repo, setRepoData] = useState([]);

  const gitHubUrl =
    "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&page=1&per_page=100";

  const getApiData = async () => {
    // try {
    //   const response = await axios.get(gitHubUrl);
    //   setRepoData(response.data.items);
    //   console.log("response", response.data.items);
    // } catch (error) {
    //   console.log("api error", error);
    // }
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="App">
      <main>
        <div className="card-grid">
          <Card />
        </div>

        <div className="card-grid">
          <Card />
        </div>
        <div className="card-grid">
          <Card />
        </div>
      </main>

      {/* {repo.map((item) => (
        <Card
          name={item.name}
          image={item.owner.avatar_url}
          url={item.owner.url}
          starCount={item.stargazers_count}
          desc={item.description}
          commitUrl={item.commits_url}
        />
      ))} */}
    </div>
  );
}

export default App;
