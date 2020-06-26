import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await Axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
    console.log(res.data);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
