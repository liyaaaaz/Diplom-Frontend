import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./context/AppProvider.jsx";
import { ModalProvider } from "./Components/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
// )
