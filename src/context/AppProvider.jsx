import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!!localStorage.getItem("userData")) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      setUser(userData);
    }
  }, [navigate]);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};

export const LogOut = () => {
  const { setUser } = useContext(AppContext);

  const handleLogOut = () => {
    setUser(null);
  };

  return <button onClick={handleLogOut}>Выйти</button>;
};

export default AppProvider;
