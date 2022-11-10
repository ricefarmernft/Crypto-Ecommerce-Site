import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Input from "./Input.js";
import Button from "./Button.js";

// TODO: Replace with your own publishable key
const stripeLoadedPromise = loadStripe(
  "pk_test_51IN0pxByCUlIffWyOZzfeooSEZJRpfPl2ZOIE38W06WMdRBgeH7orAYH1MCf175lSJREClGAAmdtvSZsazkIUfZk001kV4HdGL"
);

export default function Cart(props) {
  const { cart } = props;

  const totalPrice = cart
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toLocaleString();

  const [email, setEmail] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    const lineItems = cart.map((product) => {
      return { price: product.price_id, quantity: product.quantity };
    });
    console.log(lineItems);

    stripeLoadedPromise.then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems: lineItems,
          mode: "payment",
          successUrl: "http://localhost:3000/cart",
          cancelUrl: "http://localhost:3000/cart",
          customerEmail: email,
        })
        .then((response) => {
          // this will only log if the redirect did not work
          console.log(response.error);
        })
        .catch((error) => {
          // wrong API key? you will see the error message here
          console.log(error);
        });
    });
  }

  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length === 0 && <p>Your cart is empty.</p>}
        {cart.length > 0 && (
          <>
            <table className="table table-cart">
              <thead>
                <tr>
                  <th width="25%" className="th-product">
                    Product
                  </th>
                  <th width="20%">Unit price</th>
                  <th width="10%">Quanity</th>
                  <th width="25%">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  const lineTotal = product.price * product.quantity;
                  return (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={product.image}
                          width="30"
                          height="30"
                          alt=""
                        />{" "}
                        {product.name}
                      </td>
                      <td>${product.price.toLocaleString()}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <strong>${lineTotal.toLocaleString()}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th className="cart-highlight">Total</th>
                  <th className="cart-highlight">${totalPrice}</th>
                </tr>
              </tfoot>
            </table>
            <Button
              onClick={() => props.clearCart()}
              className="btn btn-accent btn-clear"
            >
              Clear Cart
            </Button>
            <br />
            <form className="pay-form" onSubmit={handleFormSubmit}>
              <p>
                Enter your email and then click on pay and your products will be
                delivered to you on the same day!
                <br />
              </p>
              <Input
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                required
              />
              <Button type="submit">Pay</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}