import { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ProdCard } from "../ProdCard";
import SearchIcon from "@mui/icons-material/Search";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { ModalContext } from "../ModalContext";
import { AddProd } from "../AddEditProd/addProd";
import { EditProd } from "../AddEditProd/EditProd";
import axios from "../../axios";
import { toast } from "sonner";

const filterOptions = [
  { value: "alphabetical", label: "По алфавиту" },
  { value: "price", label: "По цене" },
  { value: "drybuildingmixtures", label: "Только сухие строительные смеси" },
  { value: "primers", label: "Только грунтовки" },
  {
    value: "ready-madebuildingmixtures",
    label: "Только готовые строительные смеси",
  },
  {
    value: "drywallandcomponents",
    label: "Только гипсокартон и комплектующие",
  },
  { value: "skirtingboards", label: "Только плинтуса" },
  {
    value: "adhesivessealantsandsilicones",
    label: "Только клеи, герметики и силиконы",
  },
  { value: "scotchtapefilm", label: "Только скотч, пленка" },
  { value: "tools", label: "Только инструменты" },
  { value: "plywoodtimberfiberboard", label: "Только фанера, брус, двп" },
  { value: "decorativecorners", label: "Только декоративные углы" },
  { value: "thresholds", label: "Только пороги" },
  { value: "wallpaperfiberglass", label: "Только обои, стеклохолст" },
  { value: "fasteners", label: "Только крепеж" },
];

export const ProductsAdmin = () => {
  const [products, setProducts] = useState(null);
  const { openModal, closeModal } = useContext(ModalContext);
  const { isDesktop } = useScreenWidth();

  const [searchTerm, setSearchTerm] = useState("");

  const [filterOption, setFilterOption] = useState("alphabetical");
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/products`);
      setProducts(response.data.products);
    })();
  }, []);
  

  const handleItemSelection = (itemId) => {
    const newSelection = [...selectedItems];
    const itemIndex = newSelection.indexOf(itemId);
    if (itemIndex !== -1) {
      newSelection.splice(itemIndex, 1);
    } else {
      newSelection.push(itemId);
    }
    setSelectedItems(newSelection);
  };

  const handleSelectAll = () => {
    const allItemIds = products.map((product) => product._id);
    setSelectedItems(
      allItemIds.length === selectedItems.length ? [] : allItemIds
    );
  };

  const handleSelectDelete = async () => {
    const response = await axios.post(`/deleteproducts`, {
      ids: selectedItems,
    });
    if (response.status === 200) {
      toast.success(response.data.message);
    }
    fetchAgain();
    setSelectedItems([]);
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
            case "alphabetical":
              return true;
            case "price":
              return true;
            case "drybuildingmixtures":
              return product.subcategory.category === "DrybuildingMixtures";
            case "primers":
              return product.subcategory.category === "Primers";
            case "ready-madebuildingmixtures":
              return (
                product.subcategory.category === "ReadyMadeBuildingMixtures"
              );
            case "drywallandcomponents":
              return product.subcategory.category === "DrywallAndComponents";
            case "skirtingboards":
              return product.subcategory.category === "SkirtingBoards";
            case "adhesivessealantsandsilicones":
              return (
                product.subcategory.category ===
                "AdhesivesSealantsSilicones"
              );
            case "scotchtapefilm":
              return product.subcategory.category === "ScotchTapeFilm";
            case "tools":
              return product.subcategory.category === "Tools";
            case "plywoodtimberfiberboard":
              return (
                product.subcategory.category === "PlywoodTimberFiberboard"
              );
            case "decorativecorners":
              return product.subcategory.category === "DecorativeCorners";
            case "thresholds":
              return product.subcategory.category === "Thresholds";
            case "wallpaperfiberglass":
              return product.subcategory.category === "WallpaperFiberglass";
            case "fasteners":
              return product.subcategory.category === "Fasteners";
            default:
              return true;
          }
        })
        .sort((a, b) => {
          switch (filterOption) {
            case "alphabetical":
              return a.name.localeCompare(b.name);
            case "price":
              return a.price - b.price;
            default:
              return 0;
          }
        })
    : [];

  const fetchAgain = async () => {
    const response = await axios.get(`/products`);
    setProducts(response.data);
  };

  const handleAddProd = () => {
    openModal({
      component: AddProd,
      props: {
        closeModal,
        fetchAgain,
      },
      title: "Добавление товара",
    });
  };

  const handleEditProduct = (product) => {
    openModal({
      component: EditProd,
      props: {
        closeModal,
        product,
        fetchAgain,
      },
      title: "Изменение товара",
    });
  };

  return (
    <Box display="flex" flexDirection="column" className=" bg-white">
      <Box
        className="flex justify-between items-center"
        flexDirection={!isDesktop && "column-reverse"}
      >
        <Box
          className={`flex justify-center gap-4 py-4 ${isDesktop && "pr-4"}`}
          sx={isDesktop ? { width: "50%" } : {}}
        >
          <Button onClick={handleAddProd} fullWidth>
            Добавить
          </Button>
          <Button
            fullWidth
            disabled={selectedItems.length === 0}
            onClick={handleSelectDelete}
          >
            Удалить выбранные ({selectedItems.length})
          </Button>
          <Button variant="outlined" onClick={handleSelectAll}>
            Выбрать все
          </Button>
        </Box>
        <TextField
          sx={isDesktop ? { width: "50%" } : {}}
          fullWidth={!isDesktop}
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
      </Box>
      <Box className="flex mb-4">
        <Select
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
          label="Сортировать по"
        >
          {filterOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-4">
        {products ? (
          filteredProducts.length > 0 ? (
            filteredProducts.map((product, i) => {
              {
                return (
                  <div key={i}>
                    {" "}
                    <Box
                      className="hover:shadow hover:cursor-pointer"
                      onClick={() => handleEditProduct(product)}
                    >
                      <ProdCard
                        key={i}
                        productId={product._id}
                        selectedItems={selectedItems}
                        category={product.subcategory.category}
                        subcategory={product.subcategory.name}
                        name={product.name}
                        pictures={product.pictures}
                        price={product.price}
                        description={product.description}
                        handleItemSelection={handleItemSelection}
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
