/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  TopNav,
  Header,
  PageInfo,
  Footer,
  NewsLetter,
} from '../../custom';
import './styles.css';
import {removeItemFromCart} from '../../actions/cart';

const Cart = () => {
  const history = useHistory();
  const { cart } = useSelector((state) => ({ cart: state.Cart }));
  const { items, totalPrice } = cart.cart;

  const deleteItem = (item) => {
    removeItemFromCart(item);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <TopNav />
      <Header />
      <PageInfo title="Cart" bgPicture="url(img/bg-info/church-events.png)" />

      <div className="container ">
        <div className="row cart">
          <div className="container">
            <div className="col-md-12">
              {items.length > 0 ? (
                <table id="cart" className="table table-hover table-condensed">
                  <thead>
                    <tr>
                      <th style={{ width: '50%' }}>Sermon</th>
                      <th style={{ width: '8%' }}>Quantity</th>
                      <th style={{ width: '22%' }} className="text-center">Price</th>
                      <th style={{ width: '10%' }} />
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr>
                        <td data-th="Product">
                          <div className="row">
                            <div className="col-sm-2 hidden-xs"><img src={item.sermonImg} alt="..." className="img-responsive" /></div>
                            <div className="col-sm-10">
                              <strong className="nomargin">{item.title}</strong>
                            </div>
                          </div>
                        </td>
                        <td data-th="Quantity">
                          <input type="number" className="form-control text-center" value="1" />
                        </td>
                        <td data-th="Subtotal" className="text-center">{item.quantity * item.amount}</td>
                        <td className="actions" data-th="">
                          <button onClick={deleteItem} className="btn btn-danger btn-block"><i className="fa fa-trash-o" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="visible-xs">
                      <td className="text-center"><strong>Total # {totalPrice} </strong></td>
                    </tr>
                    <tr>
                      <td>
                        <Link to="/sermon" className="btn btn-warning">
                          Continue Shopping
                        </Link>
                      </td>
                      <td colSpan="1" className="hidden-xs" />
                      <td className="hidden-xs text-center">
                        <strong>
                          Total #
                          {totalPrice}
                        </strong>
                      </td>
                      <td>
                        <Link to="/checkout" className="btn btn-success btn-block">
                          Proceed To Checkout
                        </Link>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              ) : (
                <div className="card-body cart">
                  <div className="col-sm-12 empty-cart-cls text-center">
                    {' '}
                    <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3" />
                    <h3><strong>Your Cart is Empty</strong></h3>
                    {' '}
                    <Link to="/sermon" className="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Cart;
