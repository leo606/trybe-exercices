import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };

    this.fetchCharacter = this.fetchCharacter.bind(this);
  }

  async fetchCharacter() {
    try {
      const fetchRequest = await fetch(
        'https://rickandmortyapi.com/api/character'
      );
      const requestObj = await fetchRequest.json();
      this.setState({ characters: requestObj.results });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  render() {
    return (
      <div className="App">
        <h1>Rick and Morty Characters: </h1>
        <section className="body">
          {this.state.characters.map((elem) => (
            <div className='container' key={elem.name}>
              <h3>{elem.name}</h3>
              <img src={elem.image} alt={elem.name} />
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
