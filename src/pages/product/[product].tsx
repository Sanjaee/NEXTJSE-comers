import React from "react";
import { useRouter } from "next/router";
import DetailProduct from "@/views/DetailProduct";
import { ProductType } from "@/typesdata/product.type";

const ProductDetailPage = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();

  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${query.product}`,
  //   fetcher
  // );

  return (
    <div>
      <DetailProduct product={product} />
    </div>
  );
};

export default ProductDetailPage;

export async function getServerSideProps({
  params,
}: {
  params: { product: string };
}) {
  const res = await fetch(
    `http://localhost:3000/api/product/${params.product}`
  );
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}

// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/product");
//   const response = await res.json();

//   const paths = response.data.map((product: ProductType) => ({
//     params: {
//       product: product.id,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.product}`
//   );
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }
