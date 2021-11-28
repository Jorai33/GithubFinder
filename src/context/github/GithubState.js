import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    GET_REPOS,
    CLEAR_USERS
} from "../types";

function GithubState(props) {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users
    const searchUsers = (text) => {
        setLoading();
    
        fetch(`https://api.github.com/search/users?q=${text}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            dispatch({
                type: SEARCH_USERS,
                payload: data.items
            })
          })
      }

    // Get a Single Github User
    const getUser = (username) => {
        setLoading();

        fetch(`https://api.github.com/users/${username}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            dispatch({
                type: GET_USER, 
                payload: data 
            });
        })
    }

    // Get User Repos
    const getUserRepos = (username) => {
        dispatch({type: SET_LOADING});

        fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            dispatch({type: GET_REPOS, payload: data});
        })
    }

    // Clear Users 
    const clearUsers = () => {
        dispatch({type: CLEAR_USERS});
    }

    // Set Loading
    const setLoading = () => {
        dispatch({type: SET_LOADING});
    }

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
    
} 


export default GithubState;