import { createContext, useState, useEffect, useEffectEvent } from "react";

export const CryptoContext = createContext()

function CryptoContextProvider({ children }) {

    const [currency, setCurrency] = useState("INR")
    const [symbol, setSymbol] = useState("₹")

    useEffect(() => {
        if (currency === "INR") {
            setSymbol("₹")
        }
        else if (currency === "USD") {
            setSymbol("$")
        }
    }, [currency]);

    return (
        <CryptoContext.Provider value={{currency, setCurrency, symbol, setSymbol}}>
            {children}
        </CryptoContext.Provider>
    )
};

export default CryptoContextProvider;