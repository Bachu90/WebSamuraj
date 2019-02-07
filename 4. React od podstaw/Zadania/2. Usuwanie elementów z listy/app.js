// https://websamuraj.pl/examples/react/zadanie-lista/
// Wykorzystaj dwa komponenty: rodzica ( o nazwie List) i dziecka (o nazwie Person)


const Person = props => {
  return (
    <li id={props.id}>{props.name}<button onClick={props.delete}>Usuń</button></li>
  )
}

class List extends React.Component {

  state = {
    people: [
      { id: 10, name: 'Jan K.' },
      { id: 20, name: 'Piotr C.' },
      { id: 30, name: 'Marysia W.' },
      { id: 40, name: 'John S.' },
    ]
  }

  handleDeletePerson = (e) => {
    const newList = this.state.people.filter(person => {
      return person.id != e.target.parentNode.id;
    })
    this.setState({
      people: newList
    })
  }

  render() {
    const people = this.state.people.map(person => {
      return <Person key={person.id} id={person.id} name={person.name} delete={this.handleDeletePerson} />
    })
    return (
      <ul>
        {people}
      </ul>
    )
  }
}

ReactDOM.render(<List />, document.getElementById('root'))