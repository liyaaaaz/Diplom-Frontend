import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { products } from "../data/data";

const breadcrumbNameMap = {
  "/": "Главная",
  "/drybuildingmix": "Сухие строительные смеси",
  "/primes": "Грунтовки",
  "/basket": "Корзина",
  "/profile": "Профиль",
};

const generateBreadcrumbs = ({ product }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const breadcrumbName = breadcrumbNameMap[routeTo];

    if (index === pathnames.length - 1) {
      let itemName = "";
      if (product) {
        itemName = product[0].name;
      }

      return (
        <Typography key={index} color="textPrimary">
          {breadcrumbName}
          {itemName}
        </Typography>
      );
    }

    return (
      <Typography key={index} component={Link} to={routeTo} color="inherit">
        {breadcrumbName}
      </Typography>
    );
  });
};

export const BreadCrumbs = ({ product }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography component={Link} to="/" color="inherit">
        Главная
      </Typography>
      {generateBreadcrumbs({ product })}
    </Breadcrumbs>
  );
};