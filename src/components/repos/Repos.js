import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from "./RepoItem";


function Repos(props) {
    return (
      props.repos.map((repo) => {
       return <RepoItem repo={repo} key={repo.id} />;
      })
    )
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired
}

export default Repos
