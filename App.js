import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor() {
    super();
    this.state = { data: [
        {id: 1, name: "Simon Bailey"},
        {id:2, name: "Prosper Otemuyiwa"},
        {id:3, name: "Kent Dodds"},
        {id:4, name: "John Lindquist"},
        {id:5, name: "Joe Maddalone"}
      ]
    }
  }
  render() {
    let rows = this.state.data.map( person => {
      return <PersonRow key={person.id} data={person} />
    });
    return <table>
      <tbody>{rows}</tbody>
    </table>
  }
}

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}

export default App
