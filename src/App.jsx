import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainBody from "./Components/MainPage/Body";
import SignIn from "./Components/Pages/SignPage";
import Registration from "./Components/Pages/RegistrationPage";
import Contacts from "./Components/Pages/Contacts";

function App() {
  return (
    <div className="Wrap">
      <Router> {/* Оберните ваше приложение в компонент Router */}
        <Routes>
          <Route path="/" element={<MainBody />}/>
          <Route path="/signin" element={<SignIn />} />  
          <Route path="/reg" element={<Registration />} />  
          <Route path="/contacts" element={<Contacts />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
