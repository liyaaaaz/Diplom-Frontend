import { ProdVerticalCard } from "../../Components/ProdVerticalCard";
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
import { useScreenWidth } from "../../hooks/useScreenWidth";
import SearchIcon from "@mui/icons-material/Search";

const filterOptions = [
  { value: "price", label: "По цене" },
  { value: "plaster", label: "Только штукатурки" },
  { value: "putty", label: "Только шпаклевки" },
  { value: "tileadhesive", label: "Только плиточный клей" },
  { value: "self-levelingfloor", label: "Только наливной пол" },
  { value: "screed", label: "Только стяжка" },
  { value: "glueforgasblock", label: "Только клей для газоблока" },
  { value: "masonrymixture", label: "Только кладочная смесь" },
];

export const DryBuildingMixPage = () => {
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
            case "plaster":
              return product.subcategory.name === "Штукатурка";
            case "putty":
              return product.subcategory.name === "Шпаклевка";
            case "tileadhesive":
                return product.subcategory.name === "Клей плиточный";
            case "self-levelingfloor":
                return product.subcategory.name === "Наливной пол";
            case "screed":
                return product.subcategory.name === "Стяжка";
            case "glueforgasblock":
                return product.subcategory.name === "Клей для газоблока";
            case "masonrymixture":
                return product.subcategory.name === "Кладочная смесь";
            default:
              return true;
          }
        })
        .sort((a, b) => {
          switch (filterOption) {
            case "price":
              return a.cost - b.cost;
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
            .filter((product) => product.subcategory.category === "Dry building mixtures")
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
                        price={product.price}
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








