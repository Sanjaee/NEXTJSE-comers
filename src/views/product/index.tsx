/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProductType } from "@/typesdata/product.type";
import Link from "next/link";

const ProductView = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="mx-auto max-w-7xl p-4 sm:px-2 lg:px-2 lg:py-6 min-h-[50vh]">
      <h1 className="text-xl font-extrabold sm:text-3xl ml-2">Product</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
        {products?.length > 0 ? (
          <>
            {products?.map((product: ProductType) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="store-card">
                  <div className="store-card-inner">
                    <img
                      src={product.image}
                      alt=""
                      className="store-card-image w-full md:w-52"
                    />
                    <div className="store-card-details">
                      <div className="store-card-title-wrapper">
                        <h2 className="store-card-title">{product.name}</h2>
                      </div>
                      <p className="store-card-description">
                        {product.catagory}
                      </p>
                      <p className="store-card-price">
                        {product.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <div className="store-card">
            <div className="store-card-inner">
              <div className="store-card-image w-full md:w-52 bg-gray-200" />
              <div className="store-card-details">
                <div className="store-card-title-wrapper">
                  <h2 className="store-card-title bg-gray-200" />
                </div>
                <p className="store-card-description bg-gray-200" />
                <p className="store-card-price bg-gray-200" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
