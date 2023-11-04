/* eslint-disable react-hooks/exhaustive-deps */
import ProductView from "@/views/product";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/SWR/fetcher";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((respons) => {
  //       setProducts(respons.data);
  //     });
  // }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : data?.data} />
    </div>
  );
};

export default ProductPage;
