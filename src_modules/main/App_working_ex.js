import React, { Component } from 'react';
import '../styles/App.css';
import ShowFriends from './ShowFriends';
import AddFriends from './AddFriends';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Lamba',
      friends: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.addFriend = this.addFriend.bind(this)

  }
  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  addFriend(friend){
    this.setState((state) => ({
      friends: state.friends.concat([friend])
    }))
  }

  render() {
   return (
      <div>
        Hello {this.state.name} <br/>
        Hello {this.props.name} <br/>
        Change Name: <input type="text" value={this.state.name} onChange={this.handleChange}></input>
        <AddFriends addNew={this.addFriend}/>
        <ShowFriends names={this.state.friends}/>

      </div>
      )
  }
}

export default App;
