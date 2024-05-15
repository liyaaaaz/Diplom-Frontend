import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const MenuAdmin = () => {
  return (
    <Box className="p-4 flex flex-col gap-5 text-green-600">
      <Link to="/admin" className="w-full text-green-600">
        <Button fullWidth color="inherit">Главная</Button>
      </Link>
      <Link to="/admin/orders" className="w-full text-green-600">
        <Button fullWidth color="inherit">Заказы</Button>
      </Link>
      <Link to="/admin/products" className="w-full text-green-600">
        <Button fullWidth color="inherit">Товары</Button>
      </Link>
      
    </Box>
  );
};