import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { BreadCrumbs } from "../Components/forms/Breadcrumbs";
import { useEffect, useState } from "react";

export const SingleProd = () => {
  const { id } = useParams();
  const [products, setProducts] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:4444/products`);
      const result = await response.json();
      setProducts(result);
    })();
  }, []);
  return (
    <>
      <BreadCrumbs
        product={products && products.filter((product) => product._id == id)}
      />
      {products &&
        products
          .filter((product) => product._id == id)
          .map((product, i) => (
            <Box
              key={i}
              className="flex max-md:flex-col justify-between items-center"
            >
              <img src={product.pictures} alt="фото одежды" />
              <Typography color="black">{product.name}</Typography>
            </Box>
          ))}
    </>
  );
};
