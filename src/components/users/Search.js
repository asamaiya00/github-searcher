import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useContext } from 'react';
import GithubContext from '../context/GithubContext';

const Search  = ({ showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("")
  const githubContext = useContext(GithubContext)

  
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert("Please enter something", "light")
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const handleChange = (e) => setText(e.target.value);

    return (
      <div>
        <form onSubmit={onSubmit} className="form ">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={text}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;
