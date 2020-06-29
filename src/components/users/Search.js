import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import GithubContext from '../context/GithubContext';

const Search = ({ showClear, setAlert }) => {
  const [text, setText] = useState('');
  const { users, clearUsers, searchUsers } = useContext(GithubContext);

  showClear = users.length > 0 ? true : false;

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
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
};

export default Search;
