import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;
    return (
      <p className='order' key={this.props.index}>
        {user} bought {product} for {price.value} {price.currency}
      </p>
    );
  }
}

Order.propTypes = {
  order: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Order;
