import ProductTypes from "../productTypes/ProductTypes";

const ProductList = ({ gender }) => {
  const productListItems = [
    {
      id: 1,
      products: ["mensHat"],
      name: "Men",
    },
    {
      id: 2,
      products: ["womensHat"],
      name: "Women",
    },
  ];
  return (
    <div>
      {gender === "Men" ? (
        <ProductTypes
          key={productListItems[0].id}
          data={productListItems[0].products}
        />
      ) : (
        <ProductTypes
          key={productListItems[1].id}
          data={productListItems[1].products}
        />
      )}
    </div>
  );
};

export default ProductList;
