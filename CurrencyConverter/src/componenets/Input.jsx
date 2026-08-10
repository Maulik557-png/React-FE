import React, { useId } from "react";
import "../index.css";

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="flex-1 w-1/2">
        <label
          htmlFor="amountInputId"
          className="text-gray-500mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id="amountInputId"
          placeholder="Enter amount"
          className="outline-none py-1.5 w-full border-0 focus:ring-0"
          type="number"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            const val = e.target.value;
            onAmountChange && onAmountChange(val === "" ? "" : Number(val));
          }}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
