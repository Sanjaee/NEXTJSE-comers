/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Product.module.scss";
import { ProductType } from "@/typesdata/product.type";
import Link from "next/link";

const ProductView = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product</h1>
      <div className={styles.product__content}>
        {products?.length > 0 ? (
          <>
            {products?.map((product: ProductType) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className={styles.product__content__item}
              >
                <div className={styles.product__content__item__image}>
                  <img src={product.image} alt="" />
                </div>
                <h4 className={styles.product__content__item__name}>
                  {product.name}
                </h4>
                <p className={styles.product__content__item__catagory}>
                  {product.catagory}
                </p>
                <p className={styles.product__content__item__price}>
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </Link>
            ))}
          </>
        ) : (
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__image} />
            <div className={styles.product__content__skeleton__name} />
            <div className={styles.product__content__skeleton__catagory} />
            <div className={styles.product__content__skeleton__price} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
