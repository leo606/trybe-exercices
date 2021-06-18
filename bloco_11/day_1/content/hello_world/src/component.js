import React from 'react';

function hello(hello, name) {
  return (
    <div>
      <h1>{hello}</h1>
      <p>{name}</p>
    </div>
  );
}

class HelloWorld extends React.Component {
  render() {
    return hello('Hello World', 'My name is Leo');
  }
}

export default HelloWorld;
