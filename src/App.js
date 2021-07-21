import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/projects">Projetos</Link>
      </nav>
      <Switch>
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
