import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDataDisplay from './pages/FormDataDisplay';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/professionalForm" component={ ProfessionalForm } />
        <Route path="/formDisplay" component={ FormDataDisplay } />
        <Route exact path="/" component={ PersonalForm } />
      </Switch>
    );
  }
}
export default App;
