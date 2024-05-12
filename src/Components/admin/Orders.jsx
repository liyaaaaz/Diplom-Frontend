import {
    Box,
    Button,
    Select,
    MenuItem,
    TextField,
    InputAdornment,
    IconButton,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import { useState } from "react";
  import { orders } from "../data/data";
  import { OrderCard } from "../OrderCard";
  
  const filterOptions = [
    { value: "all", label: "Все" },
    { value: "dateAsc", label: "По дате" },
    { value: "nameAsc", label: "По алфавиту" },
  ];
  
  export const OrdersAdmin = () => {
    const [filterOption, setFilterOption] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
  
    const filteredData = orders
      .filter((order) => {
        const searchTextLower = searchTerm.toLowerCase();
        return order.surname.toLowerCase().includes(searchTextLower);
      })
      .filter((order) => {
        switch (filterOption) {
          case "nameAsc":
            return order.sort((a, b) =>
              a.surname.localeCompare(b.surname)
            )[0];
          default:
            return true;
        }
      })
      .sort((a, b) => {
        switch (filterOption) {
          case "dateAsc":
            return new Date(a.date) - new Date(b.date);
        }
      });
  
    return (
      <Box className="flex max-lg:flex-col justify-between gap-4 w-full">
        <Box className="w-1/2 max-lg:w-full">
          <Box className="flex justify-between w-full gap-5 mb-4">
            <TextField
              className="w-full"
              label="Поиск"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
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
            <Select
              className="w-1/2"
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              {filterOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box className="grid grid-cols-1 gap-4">
            {filteredData.length > 0
              ? filteredData.map((order, i) => (
                  <OrderCard key={i} order={order} />
                ))
              : "Таких заказов не найдено"}
          </Box>
        </Box>
      </Box>
    );
  };