import React, { Component } from 'react';
import '../styles/App.css';
import ShowFriends from './ShowFriends';
import AddFriends from './AddFriends';
//import PropTypes from 'prop-types';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Lamba',
      friends: [],
      data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
        
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
        
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
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

            
            <ul>
               <li><HomeComponent/></li>
               <li><AboutComponent/></li>
               <li><ContactComponent/></li>
            </ul>
        
        Hello {this.state.name} <br/>
        Hello {this.props.name} <br/>
        Change Name: <input type="text" value={this.state.name} onChange={this.handleChange}></input>
        <AddFriends addNew={this.addFriend}/>
        <ShowFriends names={this.state.friends}/>

            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} name = {person} />)}
               </tbody>
            </table>

      </div>
      )
  }
}
// App.propTypes = {
//    propArray: React.PropTypes.array.isRequired,
//    propBool: React.PropTypes.bool.isRequired,
//    propFunc: React.PropTypes.func,
//    propNumber: React.PropTypes.number,
//    propString: React.PropTypes.string,
//    propObject: React.PropTypes.object
// }

// App.defaultProps = {
//    propArray: [1,2,3,4,5],
//    propBool: true,
//    propFunc: function(e){return e},
//    propNumber: 1,
//    propString: "String value...",
  
//    propObject: {
//       objectName1:"objectValue1",
//       objectName2: "objectValue2",
//       objectName3: "objectValue3"
//    }
// }
export default App;

class HomeComponent extends Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}


class AboutComponent extends Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}


class ContactComponent extends Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
         </div>
      )
   }
}


class TableRow extends Component {
   render() {
      return (
         <tr>
            <td>{this.props.name.id}</td>
            <td>{this.props.name.name}</td>
            <td>{this.props.name.age}</td>
         </tr>
      );
   }
}

