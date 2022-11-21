import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>

        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Najeeb Ullah Khan"}
          </p>
          <p>
            <b>Phone</b>
            {"13232323243323"}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"23-02-2002"}
          </p>
          <p>
            <b>Delivered At</b>
            {"24-02-2002"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>#{"asasasas"}
          </p>
          <p>
            <b>Paid At</b>
            {"24-02-2002"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>
            PKR{"2132"}
          </p>
          <p>
            <b>Shipping Charges</b>PKR{200}
          </p>
          <p>
            <b>Tax</b>
            PKR{232}
          </p>
          <p>
            <b>Total Amount</b>
            PKR{232 + 200 + 2132}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>

          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>

          <div>
            <h4>Burger with French Fries</h4>
            <div>
              <span>{10}</span> x <span>{1800}</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: "800" }}>Sub Total</h4>
            <div style={{ fontWeight: "800" }}>PKR{2132}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
