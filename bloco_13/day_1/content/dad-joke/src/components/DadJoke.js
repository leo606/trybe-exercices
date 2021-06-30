import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };

    this.fetchJoke = this.fetchJoke.bind(this);
    this.saveJoke = this.saveJoke.bind(this);
  }

  async fetchJoke() {
    this.setState({ loading: true }, async () => {
      try {
        const headers = { headers: { Accept: 'application/json' } };
        const requestReturn = await fetch('https://icanhazdadjoke.com/', headers);
        const requestObj = await requestReturn.json();
        this.setState({ loading: false, jokeObj: requestObj });
      } catch (err) {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ jokeObj, storedJokes }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }));
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar Piada
        </button>
      </div>
    );
  }

  render() {
    const loadingElmt = <span>Loading</span>;
    const { loading, jokeObj } = this.state;
    return (
      <div>
        <span>{loading ? loadingElmt : jokeObj.joke}</span>
      </div>
    );
  }
}

export default DadJoke;
