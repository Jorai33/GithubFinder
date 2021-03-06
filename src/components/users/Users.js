import React, { useContext } from 'react';
import UserItem from "./UserItem";
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';


function Users() { 
    const githubContext = useContext(GithubContext);
    
    if(githubContext.loading) {
        return <Spinner />
    } else {
         return (
        <div style={userStyle}>
            {githubContext.users.map((user) => {
                return <UserItem key={user.id} user={user} />
            })}
        </div>
    )
    }   
    
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem"
}
 
export default Users
