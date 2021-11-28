import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


function UserItem(props) {
    
        // We add this line to avoid repeating this.state in every {}
        // const {login, avatar_url, html_url} = this.props.user;

        // When we use a FUNCTION Component, props are passed in PARAMETERS and called without "this"

        return (
            <div className="card text-center">
                <img 
                    src={props.user.avatar_url} 
                    alt="" 
                    className="round-img" 
                    style={{width: "60px"}}
                />
                <h3>{props.user.login}</h3>
                <div>
                    <Link 
                        to={`/user/${props.user.login}`} 
                        className="btn btn-dark btn-sm my-1">
                            More
                    </Link>
                </div>
            </div>
        );    
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem
