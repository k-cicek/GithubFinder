import React, { useEffect } from "react";
import { Loading } from "./Loading";
import Repos from "./Repos";

const UserDetails = ({
  getUser,
  getUserRepos,
  match,
  loading,
  repos,
  user,
}) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    html_url,
    bio,
    blog,
    followers,
    following,
    public_repos,
  } = user;

  if (loading) return <Loading />;
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-3">
          <div className="card border-0">
            <img src={avatar_url} className="card-img-top rounded-circle" />
            <div className="card-body">
              <p className="card-text">{name}</p>
              <p>
                <i className="fas fa-map-marker-alt me-1"></i>
                {location}
              </p>
              <p>
                <a href={html_url} className="btn btn-block btn-dark btn-sm">
                  Github Profile
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              {bio && (
                <>
                  <h3>About</h3>
                  <p>{bio}</p>
                </>
              )}

              {blog && (
                <>
                  <h3>Blog</h3>
                  <p>{blog}</p>
                </>
              )}
              <div className="mt-3">
                <span className="badge bg-primary">Followers: {followers}</span>
                <span className="badge bg-danger m-2">
                  Following: {following}
                </span>
                <span className="badge bg-success">Repo:{public_repos}</span>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <Repos repos={repos} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
