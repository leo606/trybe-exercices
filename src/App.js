import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dog: undefined,
      loading: true,
    };
    this.fetchDog = this.fetchDog.bind(this);
    this.renderImgElement = this.renderImgElement.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  async fetchDog() {
    this.setState({ loading: true }, async () => {
      try {
        const headers = { headers: { Accept: 'application/json' } };
        const fetchResponse = await fetch(
          'https://dog.ceo/api/breeds/image/random',
          headers,
        );
        const dogObj = await fetchResponse.json();
        if (dogObj.message.includes('terrier')) {
          this.setState({ loading: false });
          return;
        }
        this.setState({ dog: dogObj });
        this.setState({ loading: false });
      } catch (err) {
        console.log(err);
      }
    });
  }

  renderImgElement() {
    const { dog } = this.state;
    return (
      <div>
        <img src={ dog.message } alt="dog" />
        <button type="button" onClick={ this.fetchDog }>
          DOG!!
        </button>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return <div>{loading ? 'Loading...' : this.renderImgElement()}</div>;
  }
}

export default App;
