import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Card from "./components/card/card";

const Loader = () => (
  <div className="divLoader">
    <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path
        stroke="none"
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#f37685"
        transform="rotate(179.719 50 51)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 51;360 50 51"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
    </svg>
  </div>
);

function App() {
  const [repo, setRepoData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const gitHubUrl =
    "https://api.github.com/search/repositories?q=sort=stars&per_page=100&order=desc";

  const getApiData = async () => {
    try {
      const response = await axios.get(gitHubUrl);
      setRepoData(response.data.items);
      setLoading(false);
      console.log("response", response.data.items);
    } catch (error) {
      console.log("api error", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          {repo.map((item, index) => (
            <div className="card-grid" key={index}>
              <Card
                name={item.name}
                image={item.owner.avatar_url}
                url={item.owner.html_url}
                starCount={item.stargazers_count}
                desc={item.description}
                commitUrl={item.commits_url}
                fullName={item.full_name}
              />
            </div>
          ))}
        </main>
      )}
    </div>
  );
}

export default App;
