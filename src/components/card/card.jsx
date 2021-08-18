import React from "react";
import "./card.scss";

const name = (image, name, url, starCount, desc, commitUrl) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-img">
          <img src="https://avatars.githubusercontent.com/u/9892522?v=4" alt="placeholder" />
        </div>
      </div>
      <div className="card-body">
        <p className="card-title">freecode camp</p>
        <p className="card-desc">
          freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.
        </p>
      </div>
      <div className="card-footer">
        <div class="card-button">
          <button>github url</button>
        </div>
        <div class="card-button">
          <button>6000</button>
        </div>
        <div class="card-button">
          <button>see commits</button>
        </div>
      </div>
    </div>
  );
};

export default name;
