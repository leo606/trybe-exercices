import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
      counter: 0,
    };

    this.fetchJoke = this.fetchJoke.bind(this);
    console.log('constructor');
  }

  async fetchJoke() {
    const headers = { headers: { Accept: 'application/json' } };
    const fetchReturn = await fetch('https://icanhazdadjoke.com/', headers);
    const fetchObj = await fetchReturn.json();
    this.setState({ jokeObj: fetchObj });
  }

  componentDidMount() {
    console.log('componentDidMount');
    // this.fetchJoke();
  }

  shouldComponentUpdate(nextProps, prevState) {
    console.log('shouldComponentUpdate= ', nextProps, prevState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate= ', this.state, prevState);
  }

  saveJoke() {
    //salva piada no array de piadas existente
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type='button' onClick={this.saveJoke}>
          Salvar Piada
        </button>
      </div>
    );
  }

  render() {
    // const { storedJokes } = this.state;
    // const loadingelement = <span>Loading...</span>;
    console.log('render');

    return (
      <div>
        <h1>contador</h1>
        <button
          onClick={() =>
            this.setState((state) => ({ counter: state.counter + 1 }))
          }
        >
          soma
        </button>
        <br />
        <span>{this.state.counter}</span>
      </div>
    );
  }
}

export default DadJoke;
