import React from 'react';

const UserInfo = ({ user, repos }) => {
    
    let repoResults = Object.values(repos).map(repo => 
        <li key={repo.name}><a target="_blank" href={repo.html_url}>{repo.name}</a></li>
    )

    return (
        <div className="user-info">
            <div className="left-column">
                {
                    user.type !== undefined && 
                    <img className="user-card-img" 
                    src={user.avatar_url} 
                    alt={`Github image of ${user.name}`}
                    />
                }
                <p className="user-name">
                    <a href={user.html_url} target="_blank">{user.name}</a>
                </p>
            </div>
            <div className="right-column">
                <div className="user-repos">
                    <p>{user.name}'s Repositories</p>
                    <p>{repoResults}</p>
                </div>
                <div className="user-gists">
                    <p></p>
                    <p></p>
                </div>
            </div>
        
        </div>
    )
}

export default UserInfo;