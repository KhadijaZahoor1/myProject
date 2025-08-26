import SingleProduct from "@/components/SingleProduct";
import Link from "next/link";

import React from "react";

async function fetchSinglePro(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  //console.log(data);
  return data;
}

const SinglePro = async ({ params: { id } }) => {
  const product = await fetchSinglePro(id);
  return (
    <>
      <div className="container mx-auto py-10 px-24">
        <SingleProduct product={product} />
        <hr className=" border-gray-200 my-7" />
        <div className="text-right">
          <Link
            href="/repo"
            className="bg-cyan-800 text-white p-2 rounded max-w-[11rem]"
          >
            Back to All Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default SinglePro;
