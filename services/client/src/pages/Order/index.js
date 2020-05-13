import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { Container, ProductTable, Loading, EmptyCart } from './styles';

class Order extends Component {
  state = {
    orders: [],
    loading: true,
    didMount: false,
  };

  async componentDidMount() {
    const response = await api.get('orders?user_id=123');

    const manipulatedProducts = response.data.map(order => ({
      // eslint-disable-next-line no-underscore-dangle
      id: order._id,
      email: order.user_email,
      data: order.createdAt,
      products: order.products,
    }));

    const data = manipulatedProducts.map(order => ({
      ...order,
      total: formatPrice(
        order.products.reduce((total, product) => {
          return total + Number(product.price);
        }, 0)
      ),
    }));

    setTimeout(() => {
      this.setState({ orders: data, loading: false });

      setTimeout(() => {
        this.setState({ didMount: true });
      }, 0);
    }, 1000);
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { orders, loading, didMount } = this.state;

    if (loading) {
      return (
        <Loading>
          <Loader type="MutatingDot" color="#FFFFFF" />
        </Loading>
      );
    }

    if (!orders.length) {
      return (
        <Container>
          <EmptyCart>
            <MdRemoveShoppingCart size={140} />
            <h2>YOU HAVE NO ORDERS YET</h2>
            <p>
              <br />
            </p>
            <Link to="/">
              <button type="button">Continue shopping</button>
            </Link>
          </EmptyCart>
        </Container>
      );
    }

    return (
      <Container>
        <ProductTable didMount={didMount ? 1 : 0}>
          <thead>
            <tr>
              <th />
              <th>Email</th>
              <th>Produto(s)</th>
              <th>Data</th>
              <th>Total</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr>
                <td>
                  <MdShoppingCart size={36} color="#130042" />
                </td>
                <td>
                  <strong>{order.email}</strong>
                </td>
                <td>
                  {order.products.map(product => (
                    <strong>{product.title}</strong>
                  ))}
                </td>
                <td>
                  <strong>
                    {new Date(order.data)
                      .toISOString()
                      .substr(0, 10)
                      .split('-')
                      .reverse()
                      .join('/')}
                  </strong>
                </td>
                <td>
                  <strong>{order.total}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <footer />
      </Container>
    );
  }
}

export default connect()(Order);
