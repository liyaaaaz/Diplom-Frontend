import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainBody from "./Components/MainPage/Body/Body";
import SignIn from "./Components/Pages/SignPage";
import Registration from "./Components/Pages/RegistrationPage";
import Contacts from "./Components/Pages/Contacts";
import MaterialCalculator from "./Components/Pages/Calculating";
import { BasketPage } from "./Components/Pages/Basket";
import UserLayout from "./Components/layouts/userLayout";
import AppLayout from "./Components/layouts/appLayout";
import {LayoutAdmin} from "./Components/layouts/adminLayout";
import { DryBuildingMixPage } from "./Components/Pages/DryBuildingMixtures";
import { PrimersPage } from "./Components/Pages/Primes";
import {  OrdersAdmin, ProductsAdmin } from "./Components/admin/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<MainBody />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="calculating" element={<MaterialCalculator />} />
        <Route path="drybuildingmix" element={<DryBuildingMixPage />} />
        <Route path="prod" element={<ProductsAdmin />} />
        <Route path="primers" element={<PrimersPage />} />
        {/* <Route path="products/:id" element={<SingleItemPage />} /> */}
        <Route element={<UserLayout />}>
          <Route path="basket" element={<BasketPage />} />
        </Route>
      </Route>
      <Route path="/admin" element={<LayoutAdmin />}>
          {/* <Route index element={<HomeAdmin />} /> */}
          <Route path="orders" element={<OrdersAdmin />} />
          <Route path="products" element={<ProductsAdmin />} />
        </Route>

      <Route path="/signin" element={<SignIn />} />
      <Route path="/reg" element={<Registration />} />
    </Routes>
  );
}

export default App;
