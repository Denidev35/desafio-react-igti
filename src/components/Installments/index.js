import React from "react";

import "./styles.css";
import Intallment from "../Installment";

export default function Installments({ installments }) {
  return (
    <div className="cards">
      {installments.map((installment) => (
        <Intallment key={installment.month} installment={installment} />
      ))}
    </div>
  );
}
