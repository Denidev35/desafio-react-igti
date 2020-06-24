import React from "react";
import "./styles.css";

import { formattedCurrency, formattedValue } from "../../helpers/formatValue";

export default function Installment({ installment }) {
  return (
    <ul>
      <li className={installment.earnedValue < 0 ? "negative" : "positive"}>
        Mês: {installment.month}
      </li>
      <li className={installment.earnedValue < 0 ? "negative" : "positive"}>
        Montante: {formattedCurrency(installment.amount)}
      </li>
      <li className={installment.earnedValue < 0 ? "negative" : "positive"}>
        Ganho: {formattedCurrency(installment.earnedValue)}
      </li>
      <li
        style={
          installment.earnedValue < 0
            ? { color: "#ff6600" }
            : { color: "#33cc33" }
        }
      >
        Juros: {formattedValue(installment.percentageInterest)}%
      </li>
    </ul>
  );
}
