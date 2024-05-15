import { ProdVerticalCard } from "../../ProdVerticalCard";
import { useContext, useEffect, useState } from "react";
import {
  Box,
  InputLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useScreenWidth } from "../../../hooks/useScreenWidth";
import SearchIcon from "@mui/icons-material/Search";
import axios from "../../../axios";

const filterOptions = [
  { value: "price", label: "По цене" },
  { value: "whitecorners", label: "Только белые углы" },
  { value: "1*1", label: "Только углы 1*1" },
  { value: "1.5*1.5", label: "Только углы 1.5*1.5" },
  { value: "2*2", label: "Только углы 2*2" },
  { value: "3*3", label: "Только углы 3*3" },
  { value: "4*4", label: "Только углы 4*4" },
  { value: "bead", label: "Только штапик" },
  { value: "fillet", label: "Только галтель" },
];

export const DecorativeCornersPage = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
      (async () => {
        const response = await axios.get(`/products`);
        setProducts(response.data.products);
      })();
    }, []);
    const { isDesktop } = useScreenWidth();

    const [searchTerm, setSearchTerm] = useState("");

    const [filterOption, setFilterOption] = useState("alphabetical");

    const handleSelectAll = () => {
        const allItemIds = products.map((product) => product._id);
        setSelectedItems(
          allItemIds.length === selectedItems.length ? [] : allItemIds
        );
      };


    const filteredProducts = products
    ? products
        .filter((product) => {
          const searchTextLower = searchTerm.toLowerCase();
          return (
            product.name.toLowerCase().includes(searchTextLower) ||
            product.description?.toLowerCase().includes(searchTextLower)
          );
        })
        .filter((product) => {
          switch (filterOption) {
            case "price":
              return true;
            case "whitecorners":
              return product.subcategory.name === "Белые углы";
            case "1*1":
              return product.subcategory.name === "1*1";
            case "1.5*1.5":
                return product.subcategory.name === "1.5*1.5";
            case "2*2":
                return product.subcategory.name === "2*2";
            case "3*3":
                return product.subcategory.name === "3*3";
            case "4*4":
                return product.subcategory.name === "4*4";
            case "bead":
                return product.subcategory.name === "Штапик";
            case "fillet":
                return product.subcategory.name === "Галтель";
            default:
              return true;
          }
        })
        .sort((a, b) => {
          switch (filterOption) {
            case "price":
              return a.totalPrice - b.totalPrice;
            default:
              return 0;
          }
        })
    : [];
  return (
   <Box>
      <div className="p-4 flex items-center w-screen ml-4">
      <TextField 
          className="p-4"
          sx={isDesktop ? { width: "35%" } : {}}
          fullWidth
          label="Поиск"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className="p-4 flex ml-80 items-baseline">
        <InputLabel className="p-4 mr-2" id="sort">Сортировать по:</InputLabel>
        <Select
          className=" w-44 h-14 rounded-none"
          labelId="sort"
          label="Сортировать по"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          {filterOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        </div>
        
      </div>
     <Box className="flex p-4">
        
      </Box>
      <Box className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-4">
        {products ? (
          filteredProducts.length > 0 ? (
            filteredProducts
            .filter((product) => product.subcategory.category === "DecorativeCorners")
            .map((product, i) => {
              {
                return (
                  <div key={i}>
                    {" "}
                    <Box
                      className="hover:shadow hover:cursor-pointer"
                    >
                        <ProdVerticalCard
                        key={i}
                        _id={product._id}
                        category={product.subcategory.category}
                        subcategory={product.subcategory.name}
                        name={product.name}
                        pictures={product.pictures}
                        totalPrice={product.totalPrice}
                        description={product.description}
                    />
                    </Box>
                  </div>
                );
              }
            })
          ) : (
            "Товары не найдены"
          )
        ) : (
          <>Товары не найдены</>
        )}
        </Box>
    </Box>
  );
};








