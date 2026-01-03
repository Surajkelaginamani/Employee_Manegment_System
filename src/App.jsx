import { useContext, useEffect, useState } from "react";
import AdminDashboard from "./Component/Dasboard/AdminDashboard.jsx";
import Login from "./Component/Auth/Login.jsx";
import EmployeeDashboard from "./Component/Dasboard/EmployeeDashboard.jsx";
import { AuthContext } from "./Context/Authprovider.jsx";
import { setlocalstorage, getlocalstorage } from "./utils/LocalStorage";

function App() {
  const [User, setUser] = useState(null);
  const Authdata = useContext(AuthContext);
  const [logedinuser, setlogedinuser] = useState(null);

  useEffect(() => {
    setlocalstorage();
  }, []);

  useEffect(() => {
    const localuser = localStorage.getItem("logedinuser");
    if (localuser) {
      setUser(JSON.parse(localuser).role);
      setlogedinuser(JSON.parse(localuser).data);
    }
  }, []);

  // refresh the logged-in employee when employees data changes
  useEffect(() => {
    const handler = () => {
      const localuser = JSON.parse(localStorage.getItem("logedinuser"));
      if (localuser && localuser.role === "Employee" && localuser.data?.email) {
        const { employeesData } = getlocalstorage();
        const refreshed = (employeesData || []).find(
          (e) => e.email === localuser.data.email
        );
        if (refreshed) setlogedinuser(refreshed);
      }
    };
    window.addEventListener("employeesUpdated", handler);
    return () => window.removeEventListener("employeesUpdated", handler);
  }, []);

  const Handlelogin = (email, pass) => {
    const employee = Authdata?.employeesData?.find(
      (e) => e.email === email && e.password === pass
    );

    if (employee) {
      setUser("Employee");
      localStorage.setItem("logedinuser", JSON.stringify({ role: "Employee", data: employee }));
      setlogedinuser(employee);
    } else if (
      Authdata &&
      Authdata.adminData.email === email &&
      Authdata.adminData.password === pass
    ) {
      setUser("Admin");
      localStorage.setItem("logedinuser", JSON.stringify({ role: "Admin", data: null }));
    } else {
      alert("Invalid Email or Password");
    }
  };

  // ✅ LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("logedinuser");
    setUser(null);
  };

  return (
    <>
      {!User && <Login Handlelogin={Handlelogin} />}

      {User === "Admin" && (
        <AdminDashboard handleLogout={handleLogout} />
      )}

      {User === "Employee" && (
        <EmployeeDashboard handleLogout={handleLogout} data ={logedinuser} />
      )}
    </>
  );
}

export default App;
