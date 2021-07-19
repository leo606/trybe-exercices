import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      btnDisable: true,
      selected: '',
    };

    this.addTodo = this.addTodo.bind(this);
    this.addSelected = this.addSelected.bind(this);
    this.rmvTodo = this.rmvTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  rmvTodo() {
    const { selected } = this.state;
    this.setState(({ listTodo }) => ({
      listTodo: listTodo.filter((todo) => todo !== selected),
      btnDisable: true,
    }));
  }

  addSelected(todo) {
    this.setState({ selected: todo, btnDisable: false });
  }

  render() {
    const { listTodo, btnDisable } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo && (
          <ul>
            {listTodo.map((todo, index) => (
              <li key={index + 1} onClick={() => this.addSelected(todo)}>
                <Item content={todo} />
              </li>
            ))}
          </ul>
        )}
        <input
          data-testid="id-remove"
          disabled={btnDisable}
          type="button"
          value="Remover"
          onClick={this.rmvTodo}
        />
      </div>
    );
  }
}
export default App;
