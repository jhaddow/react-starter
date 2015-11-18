import React, {Component} from 'react';
import {render} from 'react-dom';
import List from './List';
import FriendAdder from './friendAdder';

const App = React.createClass( {
  getInitialState(){
    return {
      friends: ['Bob', 'Sally', 'John']
    }
  },
  addFriend(newFriend){
    this.setState({
      friends: this.state.friends.concat(newFriend)
    })
  },

  render() {
    return (
      <div className='ui container'>
        <h1>
          Welcome to the react starter.
        </h1>
        <div> My Friends:
          <FriendAdder addFriend={this.addFriend} />
          <List friends={this.state.friends} />
        </div>
      </div>
    );
  }
})

render(<App />, document.getElementById('root'));
