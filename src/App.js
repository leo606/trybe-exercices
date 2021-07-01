import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dog: '',
      loading: true,
    };
    this.fetchDog = this.fetchDog.bind(this);
    this.renderImgElement = this.renderImgElement.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.loadSavedDog = this.loadSavedDog.bind(this);
  }

  componentDidMount() {
    const { dog } = localStorage;
    if (dog) return this.loadSavedDog(dog);
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, { dog }) {
    return !dog.includes('terrier');
  }

  componentDidUpdate() {
    this.saveToLocalStorage();
    const { dog } = this.state;
    const splitArrey = dog.split('/'); // creditos: Roberval - https://github.com/rslfilho/trybe-exercises-front-end/pull/5/files
    alert(`Dog breed: ${splitArrey[4]}`);
  }

  loadSavedDog(dog) {
    this.setState({ dog, loading: false });
  }

  saveToLocalStorage() {
    const { dog } = this.state;
    localStorage.dog = dog;
  }

  async fetchDog() {
    this.setState({ loading: true });
    console.log('fetchDog');
    const DOG_URL = 'https://dog.ceo/api/breeds/image/random';
    const fetchRequest = await fetch(DOG_URL);
    const dogObj = await fetchRequest.json();
    this.setState({ dog: dogObj.message, loading: false });
  }

  renderImgElement() {
    const { dog } = this.state;
    return (
      <div>
        <img src={ dog } alt="dog" />
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <div>
          <button type="button" onClick={ this.fetchDog }>
            DOG!!
          </button>
        </div>
        {loading ? 'Loading...' : this.renderImgElement()}
      </div>
    );
  }
}

export default App;
