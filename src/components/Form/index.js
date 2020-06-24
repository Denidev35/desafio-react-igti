import React from "react";
import "./styles.css";

export default function Form(props) {
  return (
    <div className="form">
      <div className="label-input">
        <label>Montante Inicial:</label>
        <div className="input-group">
          <span>R$</span>
          <input
            type="number"
            name="montante"
            id="montante"
            min="100"
            max="100000"
            step="100"
            value={props.initialValue}
            onChange={(e) => props.setInitialValue(e.target.value)}
          />
        </div>
      </div>

      <div className="label-input">
        <label>Taxa de juros mensal:</label>
        <div className="input-group">
          <input
            type="number"
            name="juros"
            id="juros"
            step="0.1"
            min="-12"
            max="12"
            value={props.interestRate}
            onChange={(e) => props.setInterestRate(e.target.value)}
          />
          <span className="right">%</span>
        </div>
      </div>

      <div className="label-input">
        <label>Periodo (meses):</label>
        <div className="input-group">
          <input
            type="number"
            name="meses"
            id="meses"
            min="1"
            max="36"
            value={props.months}
            onChange={(e) => props.setMonths(e.target.value)}
          />
          <span className="right">meses</span>
        </div>
      </div>
    </div>
  );
}
