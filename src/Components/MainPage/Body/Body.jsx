import React from "react";
import ArticleSlider from "./Read";
import CategoryBlock from "./ChooseCategory";
import TopProductsBlock from "./TopProducts";
import ProductsBlock from "./SaleProducts";

export default function MainBody() {
  return (
    <main
      className="w-full bg-white "
      style={{ height: "1600px", backgroundColor: "white" }}
    >
      <div className=" border-2 border-yellow-400 h-[350px] w-full mb-11">
        <div className="h-[349px] w-auto">
          <div className="h-[349px] w-auto">
            <ArticleSlider />
          </div>
        </div>
      </div>
      <div className="h-[300px] w-[700px] mt-28 ">
        <div>
          <CategoryBlock />
        </div>
      </div>
      <div className="absolute h-[300px] w-full bg-yellow-400 opacity-25 flex items-center justify-center"></div>
      <div className="h-[300px] w-[700px] mt-8">
        <div>
          <TopProductsBlock />
        </div>
      </div>
      <div className="h-[300px] w-[700px] mt-8">
        <div>
          <ProductsBlock />
        </div>
      </div>
    </main>
  );
}
