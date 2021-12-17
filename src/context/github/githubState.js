import React, { useReducer } from "react";
import GithubReducer from "./githubReducer";
import GithubContext from "./githubContext";
import axios from "axios";

const GithubState = (props) => {
  const initialSize = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialSize);

  const searchUsers = (keyword) => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) => {
          dispatch({ type: "SEARCH_USERS", payload: res.data.items });
        });
    }, 1000);
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const getUser = (username) => {
    setLoading();
    setTimeout(() => {
      axios.get(`https://api.github.com/users/${username}`).then((res) => {
        dispatch({
          type: "GET_USER",
          payload: res.data,
        });
      });
    }, 1000);
  };
  const getUserRepos = (username) => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((res) => {
          dispatch({
            type: "GET_REPOS",
            payload: res.data
          })
        });
    }, 1000);
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
