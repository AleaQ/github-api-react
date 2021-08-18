import React from "react";
import "./card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(fab);

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
          <button>
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            Github page
          </button>
        </div>
        <div class="card-button">
          <button>
            <FontAwesomeIcon icon={faCodeBranch} size="2x" />
            6000 Stars
          </button>
        </div>
        <div class="card-button">
          <button>
            <FontAwesomeIcon icon={faStar} size="2x" />
            Commits
          </button>
        </div>
      </div>
    </div>
  );
};

export default name;
