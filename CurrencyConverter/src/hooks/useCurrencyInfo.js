import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCurrencyInfo(data[currency]);
                console.log(data);
            })
    }, [currency]);

    return currencyInfo;
};

export default useCurrencyInfo;