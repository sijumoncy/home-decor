import OrderAddress from "@/components/checkout/OrderAddress";
import OrderDisclosure from "@/components/checkout/OrderDisclosure";
import React from "react";

function CheckOutPage() {
  return (
    <section className="checkout__container">
      <header className="header">
        <h3>Home Decor</h3>
      </header>

      <aside className="summary-section">
        <OrderDisclosure />
      </aside>

      <div className="address-section">
        <OrderAddress/>
      </div>
    </section>
  );
}

export default CheckOutPage;
