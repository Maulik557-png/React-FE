import { useState, useEffect } from "react";
import Input from "./componenets/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [conversionResult, setConversionResult] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    if (amount === "" || isNaN(amount)) {
      setConversionResult(0);
      return;
    }

    if (currencyInfo && currencyInfo[toCurrency]) {
      const rawResult = Number(amount) * currencyInfo[toCurrency];
      setConversionResult(Number(rawResult.toFixed(2)));
    }
  }, [amount, fromCurrency, toCurrency, currencyInfo]);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* From */}
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                selectCurrency={fromCurrency}
                currencyOptions={currencyOptions}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={handleSwap}
              >
                swap
              </button>
            </div>

            {/* To */}
            <div className="w-full mt-1 mb-1">
              <Input
                label="To"
                amount={conversionResult}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setToCurrency(currency)}
                selectCurrency={toCurrency}
                amountDisable
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
