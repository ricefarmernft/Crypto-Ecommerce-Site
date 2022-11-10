import Button from "./Button.js";

export default function ProductDetailInfo({ product, onProductAdd }) {

  return (
    <>
    {product.price &&
      <p>
        Sold at <strong>${product.price.toLocaleString()}</strong> per
        piece.
      </p>}
      {product.price &&
      <Button onClick={() => onProductAdd(product)}>${product.price.toLocaleString()}</Button>}
    </>
  );
}
