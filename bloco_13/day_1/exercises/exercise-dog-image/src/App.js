import React from 'react';
import './App.css';
import fetchDog from './services/fetchDog';
import Dog from './components/Dog';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dog: '',
      loading: true,
      dogName: '',
    };
    this.refreshDog = this.refreshDog.bind(this);
    this.dogNameHandle = this.dogNameHandle.bind(this);
    this.saveLocalStorage = this.saveLocalStorage.bind(this);
  }

  componentDidMount() {
    const { dog, dogName } = JSON.parse(localStorage.dog);
    if (dog) return this.loadLocalStorge(dog, dogName);
    this.setDogUrl();
  }

  shouldComponentUpdate(_nextProps, { dog }) {
    // if (loading) return true;
    return !dog.includes('terrier');
  }

  componentDidUpdate() {
    // const { dog, loading, dogName } = this.state;
    // const dogBreed = dog.split('/'); // creditos: Roberval - https://github.com/rslfilho/trybe-exercises-front-end/pull/5/
    // eslint-disable-next-line no-alert
    // if (!loading) alert(`Dog breed: ${dogBreed[4]}`);
  }

  async setDogUrl() {
    this.setState({ dog: await fetchDog(), loading: false });
  }

  saveLocalStorage() {
    const { dog, dogName } = this.state;
    localStorage.dog = JSON.stringify({ dog, dogName });
  }

  loadLocalStorge(dog, dogName) {
    this.setState({ dog, dogName, loading: false });
  }

  dogNameHandle({ target }) {
    console.log(target.value);
    this.setState({ dogName: target.value });
  }

  refreshDog() {
    this.setState({ loading: true },
      () => fetchDog().then((dog) => this.setState({ dog, loading: false })));
  }

  render() {
    const { dog, loading, dogName } = this.state;

    return (
      <div className="app-container">
        <div>
          <div className="btns">
            <button type="button" onClick={ this.refreshDog }>
              DOG!!
            </button>
            <button type="button" onClick={ this.saveLocalStorage }>
              SAVE!!
            </button>
          </div>
          <span>
            {dogName || null}
          </span>
        </div>
        {loading ? (
          'Loading...'
        ) : (
          <Dog dogURL={ dog } value={ dogName } onChange={ this.dogNameHandle } />
        )}
      </div>
    );
  }
}

export default App;
