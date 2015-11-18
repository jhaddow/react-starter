/**
 * Created by jess.haddow on 11/17/15.
 */
import React from 'react'

const List = React.createClass({

  render(){
    const friendsList = this.props.friends.map((item, index) => {
      return <li key={index}> {item} </li>
    })
   return (
     <ul>
       {friendsList}
    </ul>
   )

  }
});

export default List