import React from "react";
import "./card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(fab);

const name = (props) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-img">
          <img src={props.image} alt="avatar" />
        </div>
      </div>
      <div className="card-body">
        <p className="card-title">{props.name}</p>
        <p className="card-desc">{props.desc}</p>
      </div>
      <div className="card-footer">
        <div className="card-button">
          <button>
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            Github page
          </button>
        </div>
        <div className="card-button">
          <button>
            <FontAwesomeIcon icon={faCodeBranch} size="2x" />
            {props.starCount} Stars
          </button>
        </div>
        <div className="card-button">
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
