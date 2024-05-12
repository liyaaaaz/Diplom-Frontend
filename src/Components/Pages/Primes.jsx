import { Box } from "@mui/material";
import { ProdVerticalCard } from "../ProdVerticalCard";
// import { Wrapper } from "../layouts/Wrapper";
import { useEffect, useState } from "react";
import axios from "../../axios";

export const PrimersPage = () => {
    const [products, setProducts] = useState();
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
  return (
    <Box>
        <Box className="grid grid-cols-4 max-xl:grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-4">
          {products &&
          products.length > 0 &&
            products
              .filter((product) => product.subcategory.category === "Primers")
              .map((product, i) => (
                <ProdVerticalCard
                  key={i}
                  _id={product._id}
                  category={product.subcategory.category}
                  subcategory={product.subcategory.name}
                  name={product.name}
                  pictures={product.pictures}
                  price={product.price}
                />
              ))}
        </Box>
    </Box>
  );
};