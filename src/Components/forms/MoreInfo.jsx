import { Box, Input, Typography } from "@mui/material";
import React from "react";
import { ProdCard } from "../ProdCard";
import dayjs from "dayjs";

export default function MoreInfoForm({ closeModal, order }) {
  console.log(order);
  return (
    <form>
      <Box
        id="modal-modal-description"
        sx={{ mt: 2 }}
        className="flex flex-col gap-10"
      >
        <Box className="flex flex-col">
          <Box className="flex justify-between gap-4">
            <Input value="Россия" disabled />
            <Input value={dayjs(Date.now()).format("DD.MM.YYYY")} disabled />
          </Box>
          <Box className="flex justify-between gap-4">
            <Input placeholder="Имя" />
            <Input placeholder="Фамилия" />
          </Box>
          <Box className="flex justify-between gap-4">
            <Input placeholder="Почта" />
            <Input placeholder="Телефон" />
          </Box>
          <Input placeholder="Населенный пункт (область)" />
          <Input placeholder="Город" />
          <Input placeholder="Почтовый индекс" />
          <Input placeholder="Адрес" />
        </Box>

        <Box height={280} className="overflow-y-scroll">
          {order.products.map((product, i) => (
            <ProdCard
              key={i}
              name={product.name}
              pictures={product.pictures}
              price={product.price}
            />
          ))}
        </Box>
      </Box>
    </form>
  );
}