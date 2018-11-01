import React, { Component } from 'react';

class AddFriends extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newFriend: ''
    }

    this.updateNewFriend = this.updateNewFriend.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }


  componentDidMount(){
    // Invoked once the component is mounted to the DOM
    // Good for making AJAX requests
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // The object you return from this function will
    // be merged with the current state.
  }
  componentWillUnmount(){
    // Called IMMEDIATELY before a component is unmounted
    // Good for cleaning up listeners
  }

  updateNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newFriend)
    this.setState({
      newFriend: ''
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newFriend}
          onChange={this.updateNewFriend}
        />
        <button onClick={this.handleAddNew}> Add Friend </button>
      </div>
    )
  }
}


export default AddFriends;
