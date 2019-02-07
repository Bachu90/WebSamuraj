/* https://websamuraj.pl/examples/react/zadanie-wrozba/ */
//Zobacz

//WYTYCZNE
// Jeden komponent
// Wersja na 5 - zobacz wróżbę, losuje jedną z trzech wróżb
// Wersja na 6 - dodaje do trzech istniejących wróżb kolejną

class App extends React.Component {
  state = {
    database: ['pierwsza wróżba', 'druga wróżba', 'trecia wróżba'],
    current: null,
    input: ''
  }

  handleSelectCurrent = () => {
    const selection = this.state.database[Math.floor(Math.random() * this.state.database.length)];
    this.setState({
      current: selection
    })
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleAddOption = (e) => {
    e.preventDefault();
    if (this.state.input === '') {
      alert('wpisz coś!');
    } else {
      alert(`Wróżba "${this.state.input}" dodana do bazy danych`);
      this.setState({
        database: [...this.state.database, this.state.input],
        input: ''
      })
    }

  }

  render() {
    return (
      <>
        <button onClick={this.handleSelectCurrent}>Zobacz wróżbe</button>
        <div>
          <input type="text" value={this.state.input} onChange={this.handleInput}></input><input type="submit" value="Dodaj wróżbe" onClick={this.handleAddOption}></input>
        </div>
        <h1>{this.state.current}</h1>
      </>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))