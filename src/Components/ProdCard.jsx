import { Box, Typography } from "@mui/material";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { Checkbox } from "@mui/material";

export const ProdCard = ({
    name,
    category,
    subcategory,
    price,
    pictures,
    description,
    selectedItems,
    handleItemSelection,
    productId,
}) => {
  const { isDesktop } = useScreenWidth();
  return (
    <div
      className={` flex justify-between relative w-full text-xs md:text-sm xxl:text-lg rounded-l shadow p-5 rounded bg-white min-h-[300px]`}
      role="list"
    >
      {productId && (
        <Checkbox
          className="absolute w-2 h-2 "
          checked={selectedItems.includes(productId)}
          onChange={() => handleItemSelection(productId)}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      )}
      <Box className="flex items-center justify-center text-black">
        <img
          className="rounded-md"
          width={isDesktop ? "200" : "100"}
          src={pictures}
          alt="Фото товара"
        />
      </Box>

      <div className="flex flex-col justify-between w-1/2">
        <div className="flex flex-col justify-around h-full">
          <div className="flex justify-end">
            <Typography
              className="truncate  text-black"
              fontWeight="bold"
              textAlign="right"
            >
              {name}
            </Typography>
          </div>
          
          <div className="flex justify-end">
            <Typography
              className="truncate  text-black"
              fontWeight="bold"
              textAlign="right"
            >
             Подкатегория: {subcategory}
            </Typography>
          </div>
          <div className="flex justify-end">
            <Typography
              className="truncate  text-black"
              fontWeight="bold"
              textAlign="right"
            >
              Описание: {description}
            </Typography>
          </div>
          
          
          <div className="flex justify-end">
            <Typography className="truncate  text-black">{price} Р</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};