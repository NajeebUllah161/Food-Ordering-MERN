import React from "react";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>

          <div>
            <label>Country</label>
            <select>
              <option value="">Country</option>
              <option value="">Pakistan</option>
            </select>
          </div>

          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              <option value="">KPK</option>
            </select>
          </div>

          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter PIN Code." />
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" placeholder="Enter Phone No." />
          </div>

          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
