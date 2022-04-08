import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setValeus = (values) => {
    setData(values);
  };

  return (
    <DataContext.Provider value={{ data, setValeus }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
