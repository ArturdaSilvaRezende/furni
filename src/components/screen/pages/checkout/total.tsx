type TotalProps = {
  cartTotal: number;
};

export default function CheckoutTotal({ cartTotal }: TotalProps) {
  return (
    <div className="checkout__total">
      <div className="checkout__item">
        <p>Subtotal: </p>
        <p>${cartTotal}</p>
      </div>
      <div className="checkout__shipping">
        <p>Shipping</p>
        <div className="shipping__options">
          <p>
            <input type="checkbox" />
            <span>Free Shipping</span>
          </p>
          <p>
            <input type="checkbox" />
            <span>Flat rate: $15.00</span>
          </p>
          <p>
            <input type="checkbox" />
            <span>Local Pickup: $8.00</span>
          </p>
        </div>
      </div>
      <div className="checkout__item">
        <p>Total: </p>
        <p>${cartTotal}</p>
      </div>
      <div className="checkout__disclaimer">
        <p>
          <input type="checkbox" />
          <span>Direct Bank Transfer</span>
        </p>
        <p>
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
      </div>
      <div className="checkout__payments">
        <p>
          <input type="checkbox" />
          <span>Check Payments</span>
        </p>
      </div>
      <div className="checkout__payments">
        <p>
          <input type="checkbox" />
          <span>Cash On Delivery</span>
        </p>
      </div>
      <div className="checkout__payments">
        <p>
          <input type="checkbox" />
          <span>Paypal</span>
        </p>
      </div>
    </div>
  );
}
