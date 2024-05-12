import React, { useState } from "react";
import Header from "../MainPage/Header/Header";
import Footer from "../MainPage/Footer";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const MaterialCalculator = () => {
  const [material, setMaterial] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const materials = [
    { value: "gypsumfloor", label: "Гипсовый наливной пол" },
    { value: "cementfloor", label: "Цементный наливной пол" },
    { value: "floorscreed", label: "Стяжка пола" },
    { value: "cementplaster", label: "Цементная штукатурка" },
    { value: "startgypsumplaster", label: "Стартовая гипсовая штукатурка" },
    { value: "gypsumplaster", label: "Гипсовая штукатурка" },
    // Добавьте другие материалы по аналогии
  ];

  const calculateWeight = () => {
    // Простейший расчет веса, можно доработать для каждого материала
    let calculatedWeight = 0;
    if (material === "gypsumfloor") {
      calculatedWeight = parseFloat(length) * parseFloat(width) * 14;
    } else if (material === "cementfloor") {
      calculatedWeight = parseFloat(length) * parseFloat(width) * 16;
    } else if (material === "floorscreed") {
      calculatedWeight = parseFloat(length) * parseFloat(width) * 18;
    } else if (material === "cementplaster") {
      calculatedWeight = parseFloat(length) * parseFloat(width) * 18;
    } else if (material === "startgypsumplaster") {
      calculatedWeight = parseFloat(length) * parseFloat(width) * 10;
    } else if (material === "gypsumplaster") {
      calculatedWeight = parseFloat(length) * parseFloat(width) * 8;
    }

    setWeight(calculatedWeight.toFixed(2));
  };

  return (
    <>
      <div className="flex justify-center items-center bg-white h-screen">
        <div className="w-2/4">
          <div className="flex justify-center items-cente">
            <h2 className="text-green-600 text-2xl font-bold">
              Строительный калькулятор
            </h2>
          </div>

          <div className="p-6">
            <TextField
              className="text-green-600"
              select
              label="Материал"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="">Выберите материал</MenuItem>
              {materials.map((mat, index) => (
                <MenuItem key={index} value={mat.value}>
                  {mat.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="p-6">
            <TextField
              label="Площадь(кв.м)"
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              variant="outlined"
              fullWidth
              className="mt-4"
            />
          </div>
          <div className="p-6">
            <TextField
              label="Толщина слоя(см)"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              variant="outlined"
              fullWidth
              className="mt-4"
            />
          </div>

          <Button
            onClick={calculateWeight}
            variant="contained"
            style={{ backgroundColor: "#4CAF50", color: "white" }}
            fullWidth
            className="mt-4"
          >
            Рассчитать
          </Button>
          {weight && <p className="mt-4 text-green-600">Вес: ~ {weight} кг</p>}
        </div>
      </div>
    </>
  );
};

export default MaterialCalculator;
