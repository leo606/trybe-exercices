import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};

function App() {
  return Task('Hey there!');
}

export default App;
