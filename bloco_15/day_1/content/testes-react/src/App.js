import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
      </label>
      <input type="email" id='id-email'/>
      <input id='btn-send' type="button" value='Enviar' />
    </div>
  );
}

export default App;
