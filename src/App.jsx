import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainBody from "./Components/MainPage/Body/Body";
import SignIn from "./Components/Pages/SignPage";
import Registration from "./Components/Pages/RegistrationPage";
import Contacts from "./Components/Pages/Contacts";
import MaterialCalculator from "./Components/Pages/Calculating";
import { BasketPage } from "./Components/Pages/Basket";
import UserLayout from "./Components/layouts/userLayout";
import AppLayout from "./Components/layouts/appLayout";
import { LayoutAdmin } from "./Components/layouts/adminLayout";
import { DryBuildingMixPage } from "./Components/Pages/Catalog/DryBuildingMixtures";
import { PrimesPage } from "./Components/Pages/Catalog/Primes";
import { ReadyMadePage } from "./Components/Pages/Catalog/ReadyBuildingMixture";
import { DrywallPage } from "./Components/Pages/Catalog/DrywallAndComponents";
import { SkirtingBoardsPage } from "./Components/Pages/Catalog/SkirtingBoards";
import { AdhesivesPage } from "./Components/Pages/Catalog/AdhesivesSealantsSilicones";
import { ScotchPage } from "./Components/Pages/Catalog/ScotchTapeFilm";
import { ToolsPage } from "./Components/Pages/Catalog/Tools";
import { PlywoodPage } from "./Components/Pages/Catalog/PlywoodTimberFiberboard";
import { DecorativeCornersPage } from "./Components/Pages/Catalog/DecorativeCorners";
import { ThresholdsPage } from "./Components/Pages/Catalog/Thresholds";
import { WallpaperPage } from "./Components/Pages/Catalog/WallpaperFiberglass";
import { FastenersPage } from "./Components/Pages/Catalog/Fasteners";
import { OrdersAdmin, ProductsAdmin } from "./Components/admin/";
import { ProfilePage } from "./Components/ProfilePage";
import MainPage from "./Components/profile/MainPage";
import EditPage from "./Components/profile/Edit";
import { OrdersPage } from "./Components/profile/Orders";
import { SingleProd } from "./Components/SingleProd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<MainBody />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="calculating" element={<MaterialCalculator />} />
        <Route path="DrybuildingMixtures" element={<DryBuildingMixPage />} />
        <Route path="DrybuildingMixtures/:id" element={<SingleProd />} />
        <Route path="Primes" element={<PrimesPage />} />
        <Route path="Primes/:id" element={<SingleProd />} />
        <Route path="ReadyMadeBuildingMixtures" element={<ReadyMadePage />} />
        <Route path="ReadyMadeBuildingMixtures/:id" element={<SingleProd />} />
        <Route path="DrywallAndComponents" element={<DrywallPage />} />
        <Route path="DrywallAndComponents/:id" element={<SingleProd />} />
        <Route path="SkirtingBoards" element={<SkirtingBoardsPage />} />
        <Route path="SkirtingBoards/:id" element={<SingleProd />} />
        <Route path="AdhesivesSealantsSilicones" element={<AdhesivesPage />} />
        <Route path="AdhesivesSealantsSilicones/:id" element={<SingleProd />} />
        <Route path="ScotchTapeFilm" element={<ScotchPage />} />
        <Route path="ScotchTapeFilm/:id" element={<SingleProd />} />
        <Route path="Tools" element={<ToolsPage />} />
        <Route path="Tools/:id" element={<SingleProd />} />
        <Route path="PlywoodTimberFiberboard" element={<PlywoodPage />} />
        <Route path="PlywoodTimberFiberboard/:id" element={<SingleProd />} />
        <Route path="DecorativeCorners" element={<DecorativeCornersPage />} />
        <Route path="DecorativeCorners/:id" element={<SingleProd />} />
        <Route path="Thresholds" element={<ThresholdsPage />} />
        <Route path="Thresholds/:id" element={<SingleProd />} />
        <Route path="WallpaperFiberglass" element={<WallpaperPage />} />
        <Route path="WallpaperFiberglass/:id" element={<SingleProd />} />
        <Route path="Fasteners" element={<FastenersPage />} />
        <Route path="Fasteners/:id" element={<SingleProd />} />
      </Route>
      <Route path="/profile" element={<UserLayout />}>
        <Route index element={<ProfilePage />} />
        <Route path="me" element={<MainPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="basket" element={<BasketPage />} />
        <Route path="edit" element={<EditPage />} />
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
