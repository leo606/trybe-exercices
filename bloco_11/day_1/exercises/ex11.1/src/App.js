import './App.css';

const appoint = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis'];

const Task = (value) => {
  return <li>{value}</li>;
};

function App() {
  return appoint.map((elem) => Task(elem));
}

export default App;
