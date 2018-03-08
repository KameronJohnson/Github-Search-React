import React from 'react';

const UserInfo = ({ user, repos, gists }) => {
    
    let repoResults = Object.values(repos).map(repo => 
        <li className="user-list-item" key={repo.name}>
            <a target="_blank" href={repo.html_url}>{repo.name}</a>
        </li>
    )
    
    let gistResults = Object.values(gists).map(gist => 
        <li className="user-list-item" key={gist.id}>
            <a target="_blank" href={gist.html_url}>{Object.keys(gist.files)}</a>
        </li>
    )

    console.log("gists", gists);
    console.log("repos", repos);
    
    return (
        <div className="user-info">
            <div className="left-column">
                {
                    user.type !== undefined && 
                    <img className="user-avatar" 
                    src={user.avatar_url} 
                    alt={`${user.name}'`}
                    />
                }
                <p className="user-name">
                    <a href={user.html_url} target="_blank">{user.name}</a>
                </p>
            </div>
            <div className="right-column">
                <div className="user-block">
                    <p className="user-title">{user.name}'s Repositories</p>
                    <hr class="line" />
                    <ul className="user-list">{repoResults}</ul>
                </div>
                <div className="user-block">
                    <p className="user-title">{user.name}'s Gists</p>
                    <hr class="line" />
                    <ul className="user-list">{gistResults}</ul>
                </div>
            </div>
        
        </div>
    )
}

export default UserInfo;