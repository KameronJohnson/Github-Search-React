import React from 'react';

const UserInfo = ({ user, repos, gists }) => {
    
    //map repositories
    let repoResults = Object.values(repos).map(repo => 
        <li className="user-list-item" key={repo.name}>
            <a target="_blank" href={repo.html_url}>{repo.name}</a>
        </li>
    )
    
    //map gists
    let gistResults = Object.values(gists).map(gist => 
        <li className="user-list-item" key={gist.id}>
            <a target="_blank" href={gist.html_url}>{Object.keys(gist.files)}</a>
        </li>
    )
    
    console.log(gistResults);
    console.log(repoResults);

    return (
        <div>
            { user.type !== undefined &&
                <div className="user-info">
                    <div className="left-column">
                            <img className="user-avatar" 
                            src={user.avatar_url} 
                            alt={`${user.name}'`}
                            />
                        <p className="user-name">
                            <a href={user.html_url} target="_blank">{user.name}</a>
                        </p>
                    </div>
                    <div className="right-column">
                        <div className="user-block">
                            <p className="user-title">{user.name !== null ? user.name : "Uknown User"}'s Repositories</p>
                            <hr className="line" />
                            <ul className="user-list">
                                {(repoResults.length > 0) ? repoResults : "This user hasn't created any repositories yet!"}
                            </ul>
                        </div>
                        <div className="user-block">
                            <p className="user-title">{user.name !== null ? user.name : "Unknown User"}'s Gists</p>
                            <hr className="line" />
                            <ul className="user-list">
                                {(gistResults.length > 0) ? gistResults : "This user hasn't created any gists yet!"}
                            </ul>
                        </div>
                    </div>
                
                </div>
            }
        </div>
    )
}

export default UserInfo;