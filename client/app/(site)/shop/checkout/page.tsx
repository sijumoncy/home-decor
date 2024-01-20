import OrderAddress from "@/components/checkout/OrderAddress";
import OrderDisclosure from "@/components/checkout/OrderDisclosure";
import React from "react";

function CheckOutPage() {
  return (
    <section className="checkout__container">
      <div className="header">
        <h3>Home Decor</h3>
      </div>
      <div className="sidebar">
        <OrderDisclosure />
      </div>
      <div className="content">
        <OrderAddress />
      </div>
    </section>
  );
}

export default CheckOutPage;
