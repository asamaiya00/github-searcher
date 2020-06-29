import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../Repos/Repos';
import { useContext } from 'react';
import GithubContext from '../context/GithubContext';

const User = ({    match }) => {
  const { getUser,user,repos, getRepos, loading} = useContext(GithubContext);

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    html_url,
    bio,
    blog,
    company,
    followers,
    following,
    hireable,
    login,
    public_repos,
    public_gists,
  } = user;

  if (loading) return <Spinner />;

  return (
    <React.Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <h5>Location: {location}</h5>
        </div>
        <div>
          {bio && (
            <React.Fragment>
              <h2>Bio</h2>
              <h4>{bio}</h4>
            </React.Fragment>
          )}

          <a href={html_url} className="btn btn-dark my-2">
            Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <React.Fragment>
                  <strong>Username: </strong>
                  {login}
                </React.Fragment>
              )}
            </li>
            <li>
              {company && (
                <React.Fragment>
                  <strong>Company: </strong>
                  {company}
                </React.Fragment>
              )}
            </li>
            <li>
              {blog && (
                <React.Fragment>
                  <strong>Website: </strong>
                  {blog}
                </React.Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-success">Followers: {followers}</div>
        <div className="badge badge-primary">Following: {following}</div>
        <div className="badge badge-cyan">Public Repos: {public_repos}</div>
        <div className="badge badge-light">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </React.Fragment>
  );
};

export default User;
