import React, { Component } from 'react';
//import PropTypes from 'prop-types'

class ShowFriends extends Component {
  render() {
   return (
      <div>
      <h3> Friends</h3>
      <ul>
      {this.props.names.map((friend) => { return <li>{friend}</li>})}
      </ul>
      </div>
      )
  }
}

ShowFriends.defaultProps = {
  names: ['you are not alone']
}

export default ShowFriends;

