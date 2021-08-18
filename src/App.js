import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Card from "./components/card/card";

function App() {
  const [repo, setRepoData] = useState([]);

  const gitHubUrl =
    "https://api.github.com/search/repositories?q=sort=stars&order=desc&per_page=100";

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
        {repo.map((item, index) => (
          <div className="card-grid" key={index}>
            <Card
              name={item.name}
              image={item.owner.avatar_url}
              url={item.owner.url}
              starCount={item.stargazers_count}
              desc={item.description}
              commitUrl={item.commits_url}
            />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
