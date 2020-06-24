import React, { useState, useEffect } from "react";
import "./app.css";

import Form from "./components/Form";
import Installments from "./components/Installments";

function App() {
  const [initialValue, setInitialValue] = useState(100);
  const [interestRate, setInterestRate] = useState(0.1);
  const [months, setMonths] = useState(1);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    let arrayInstallments = [];
    for (let month = 1; month <= months; month++) {
      const amount = initialValue * (1 + interestRate / 100) ** month;
      const earnedValue = amount - initialValue;
      const percentageInterest = (earnedValue / initialValue) * 100;

      let installment = {
        month,
        amount,
        earnedValue,
        percentageInterest,
      };
      arrayInstallments.push(installment);
    }

    setInstallments(arrayInstallments);
  }, [initialValue, interestRate, months]);

  return (
    <div className="container">
      <h1>React - Juros Compostos</h1>
      <div>
        <Form
          initialValue={initialValue}
          interestRate={interestRate}
          months={months}
          setInitialValue={setInitialValue}
          setInterestRate={setInterestRate}
          setMonths={setMonths}
        />
        <Installments installments={installments} />
      </div>
    </div>
  );
}

export default App;
