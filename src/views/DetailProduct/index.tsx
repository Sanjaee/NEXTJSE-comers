/* eslint-disable @next/next/no-img-element */

import styles from "./DetailProduct.module.scss";
import { ProductType } from "@/typesdata/product.type";

const DetailProduct = ({ product }: { product: ProductType }) => {
  return (
    <>
      <h1 className={styles.title}>Detail Product </h1>
      <div className={styles.productDetail}>
        <div className={styles.productDetail__image}>
          <img src={product.image && product.image} alt={product.name} />
        </div>
        <h4 className={styles.productDetail__name}>{product.name}</h4>
        <p className={styles.productDetail__catagory}>{product.catagory}</p>
        <p className={styles.productDetail__price}>
          {product.price &&
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </div>
    </>
  );
};

export default DetailProduct;
