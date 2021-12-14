import React from "react";

const Repo = ({ repo }) => {
  return (
    <li className="list-group-item">
      <i className="far fa-dot-circle me-1"></i>
      <a className="text-decoration-none" href={repo.html_url} >{repo.name}</a>
    </li>
  );
};
export default Repo;
