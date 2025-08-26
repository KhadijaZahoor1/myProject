import Pagination from "@/components/Pagination";
import Products from "@/components/Products";
import React from "react";

const RepoPage = async ({ searchParams }) => {
  async function fetchRepo(page = 1, search = null) {
    const skip = 4 * (page - 1);
    let response = null;
    if (search) {
      //// call search api
      response = await fetch(
        `https://dummyjson.com/products/search?q=${search}`,
        {
          cache: "no-store",
        }
      );
    } else {
      response = await fetch(
        `https://dummyjson.com/products/?page=${page}&limit=${4}&skip=${skip}`,
        {
          cache: "no-store",
        }
      );
    }

    const data = await response.json();
    // console.log(data.products);

    const limit = data.limit;
    const total = data.total;
    const totalPages = Math.ceil(total / limit);

    const res = {
      products: data.products,
      meta: {
        page,
        totalPages,
      },
    };
    return res;
  }

  const data = await fetchRepo(searchParams?.page, searchParams?.search);
  ////
  return (
    <>
      <Products products={data.products} />
      <Pagination meta={data.meta} />
    </>
  );
};

export default RepoPage;
