/**
 * Created by jess.haddow on 11/17/15.
 */
import React from 'react'

const FriendAdder = React.createClass({
  getInitialState(){
    return {
      newFriend: ''
    }
  },
  updateFriend(event){
    this.setState({
      newFriend: event.target.value
    })
  },
  render(){
    return (
      <div>
        <input type="text" value={this.state.newFriend} onChange={this.updateFriend}/>
        <button onClick={() => this.props.addFriend(this.state.newFriend)}>Submit</button>
      </div>

    )
  }
})

export default FriendAdder;