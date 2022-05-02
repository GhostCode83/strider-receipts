import React, { useContext, useState, useEffect } from "react";
import { store } from "../store";

const ReceiptsContext = React.createContext();
const ReceiptsUpdateContext = React.createContext();

export function useReceipts() {
  return useContext(ReceiptsContext);
}
export function useReceiptsUpdate() {
  return useContext(ReceiptsUpdateContext);
}

export function ReceiptsProvider({ children }) {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    refresh();
  }, []);

  const options = {
    method: "GET",
    headers: {
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
      Accept: "*/*",
    },
  };

  const refresh = () => {
    fetch("http://localhost:8000/json_placeholder", options)
      .then((response) => response.json())
      .then((response) => setReceipts(response))
      .catch((err) => {
        console.error(err);
      });
  };

  function handleReceiptSearch(e) {
    const value = e.target.value.toLowerCase();

    if (!value) {
      refresh();
    }

    const list = receipts.filter((receipt) => {
      const { OrderId, CustomerId, CustomerName } = receipt;
      const orderIdString = OrderId.toString();
      const customerIdString = CustomerId.toString();
      const lowerCaseName = CustomerName.toLowerCase();

      if (
        orderIdString.includes(value) ||
        customerIdString.includes(value) ||
        lowerCaseName.includes(value)
      ) {
        return receipt;
      }
      return null;
    });

    if (!list.length) {
      setReceipts([]);
    } else {
      setReceipts(list);
    }
  }

  return (
    <ReceiptsContext.Provider value={receipts}>
      <ReceiptsUpdateContext.Provider value={handleReceiptSearch}>
        {children}
      </ReceiptsUpdateContext.Provider>
    </ReceiptsContext.Provider>
  );
}
