import React from "react";
import CartItem from "./CartItem";
import { CLEARCART, GETTOTAL } from "../action";
import { connect } from "react-redux";
const CartContainer = ({ cart = [], total, dispatch }) => {
  React.useEffect(() => {
    dispatch({ type: GETTOTAL });
  }, [cart, dispatch]);
  if (cart.length === 0) {
    return (
      <div className="full">
        <section className="cart">
          <header>
            <h2>your bag</h2>
            <h4 className="empty-cart">is currently empty.</h4>
          </header>
          {/* <h4 className="cr">Clone starter from john-smilga</h4>; */}
        </section>
        <div>
          <h4 className="cr">Clone starter from john-smilga</h4>
        </div>
      </div>
    );
  }
  return (
    <div className="full">
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <article>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </article>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>฿{total}</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch({ type: CLEARCART })}
          >
            clear cart
          </button>
        </footer>
      </section>
      <div>
        <h4 className="cr">Clone starter from john-smilga</h4>
      </div>
    </div>
  );
};
function mapStateToProps(store) {
  const { cart, total } = store;
  return { cart, total };
}
export default connect(mapStateToProps)(CartContainer);
