import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;
    return (
      <p className='order'>
        {user} bought {product} for {price.value} {price.currency}
      </p>
    );
  }
}

export default Order;
