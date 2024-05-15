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

const filterOptions = [
  { value: "price", label: "По цене" },
  { value: "woodscrews", label: "Только саморезы по дереву" },
  { value: "metalscrews", label: "Только саморезы по металлу" },
  { value: "dowel-nail", label: "Только дюбель-гвоздь" },
  { value: "concretescrew", label: "Только шуруп по бетону" },
  { value: "wedgeanchor", label: "Только анкер-клин" },
];

export const FastenersPage = () => {
    const [products, setProducts] = useState();
    const { isDesktop } = useScreenWidth();

    const [searchTerm, setSearchTerm] = useState("");

    const [filterOption, setFilterOption] = useState("alphabetical");

    const handleSelectAll = () => {
        const allItemIds = products.map((product) => product._id);
        setSelectedItems(
          allItemIds.length === selectedItems.length ? [] : allItemIds
        );
      };

    useEffect(() => {
      (async () => {
        const response = await fetch(`http://localhost:4444/products`, {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        });
        const result = await response.json();
        setProducts(result);
      })();
    }, []);

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
            case "woodscrews":
              return product.subcategory.name === "Саморезы по дереву";
            case "metalscrews":
              return product.subcategory.name === "Саморезы по металлу";
            case "dowel-nail":
                return product.subcategory.name === "Дюбель-гвоздь";
            case "concretescrew":
                return product.subcategory.name === "Шуруп по бетону";
            case "wedgeanchor":
                return product.subcategory.name === "Анкер-клин";
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
            .filter((product) => product.subcategory.category === "Fasteners")
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








