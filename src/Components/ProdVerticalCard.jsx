import { Box, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProdVerticalCard = ({
  name,
  category,
  subcategory,
  price,
  totalPrice, // Добавляем totalPrice в пропсы
  pictures,
  description,
  _id,
  // carts = false,
}) => {
  const [cartProduct, setCartProducts] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${category}/${_id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      onClick={() => handleClick()}
      className={`flex flex-col justify-between text-black text-xs md:text-sm xxl:text-lg rounded-l hover:shadow hover:bg-gray-50 cursor-pointer p-5 rounded bg-white`}
      role="list"
    >
      <Box className="items-center justify-center">
        <img className="rounded-md" src={pictures} alt="" />
      </Box>

      <Box>
        <Box className="flex flex-col">
          <Typography component="div">
            <Box sx={{ fontWeight: "bold", fontSize: 20, m: 1 }}>{name}</Box>
            <Box sx={{ fontWeight: "regular", fontSize: 14, m: 1 }}>
              {subcategory}
            </Box>
            {price !== totalPrice && ( // Если цена и totalPrice различны, отображаем обе
              <>
                <Box sx={{ fontWeight: "medium", fontSize: 16, m: 1, textDecoration: 'line-through' }}>
                  {price} руб.
                </Box>
                <Box sx={{ fontWeight: "medium", fontSize: 16, m: 1 }}>
                  {totalPrice} руб. {/* Отображаем totalPrice рядом */}
                </Box>
              </>
            )}
            {price === totalPrice && ( // Если цена и totalPrice одинаковы, отображаем только одну
              <Box sx={{ fontWeight: "medium", fontSize: 16, m: 1 }}>
                {price} руб.
              </Box>
            )}
            <Box
              sx={{
                fontWeight: 500,
                fontSize: "default",
                textAlign: "right",
                m: 1,
              }}
            >
              {description}
            </Box>
          </Typography>
        </Box>
      </Box>
      <Box className="flex justify-end">
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            setCartProducts(!cartProduct);
          }}
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {cartProduct ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon />}
        </IconButton>
      </Box>
    </Box>
  );
};
