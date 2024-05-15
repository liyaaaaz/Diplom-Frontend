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
  { value: "knivesandblades", label: "Только ножи и лезвия" },
  { value: "bits", label: "Только биты" },
  { value: "constructionbags", label: "Только строительные мешки" },
  { value: "spatulas", label: "Только шпатели" },
  { value: "gloves", label: "Только перчатки" },
  { value: "pencilsandmarkers", label: "Только карандаши и маркеры" },
];

export const ToolsPage = () => {
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
            case "knivesandblades":
              return product.subcategory.name === "Ножи и лезвия";
            case "bits":
              return product.subcategory.name === "Биты";
            case "constructionbags":
                return product.subcategory.name === "Мешки строительные";
            case "spatulas":
                return product.subcategory.name === "Шпатели";
            case "gloves":
                return product.subcategory.name === "Перчатки";
            case "pencilsandmarkers":
                return product.subcategory.name === "Карандаши и маркеры";
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
            .filter((product) => product.subcategory.category === "Tools")
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








