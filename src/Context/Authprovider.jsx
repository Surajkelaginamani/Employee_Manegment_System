import React, { useEffect, useState, createContext } from "react";
import { getlocalstorage } from "../utils/LocalStorage";

export const AuthContext = createContext({ employeesData: [], adminData: {} });

const Authprovider = ({ children }) => {
  const [Data, setData] = useState({ employeesData: [], adminData: {} });

  useEffect(() => {
    const load = () => {
      const { employeesData, adminData } = getlocalstorage();
      setData({ employeesData, adminData });
    };
    load();
    // reload when employees are updated elsewhere in the app
    window.addEventListener("employeesUpdated", load);
    return () => window.removeEventListener("employeesUpdated", load);
  }, []);

  return (
    <AuthContext.Provider value={Data}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
