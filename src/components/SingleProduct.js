"use client";

import React from "react";
import StarRatings from "react-star-ratings";
import BreadCrumbs from "./BreadCrumbs";
import { addToCart } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";
import Gallery from "./Gallery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = async ({ product }) => {
  ////
  const dispatch = useDispatch();
  const btnAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const InStock = product?.stock >= 1;
  ////

  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/repo" },
    {
      name: `${product?.title}`,
      url: `/products/${product?.id}`,
    },
  ];
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div key={product?.id} className="flex gap-5">
        <div className="w-1/2">
          <Gallery images={product?.images} />
        </div>
        <div className="w-1/2 p-5">
          {" "}
          <div className="text-xl font-medium">{product?.title}</div>
          <div className="flex items-center gap-1 mt-[6px]">
            <StarRatings
              rating={product?.rating}
              starRatedColor="#ffb829"
              numberOfStars={5}
              starDimension="18px"
              starSpacing="1px"
              name="rating"
            />
            <span>. {product?.rating}</span>
          </div>
          <div className="font-medium py-3"> ${product?.price}</div>
          <div className="">
            {product?.description} Lorem ipsum dolor sit amet consectetur
            adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua
          </div>
          <div className="mt-6">
            {" "}
            <button
              onClick={() => btnAddToCart(product)}
              className="bg-cyan-800 text-white rounded p-3"
            >
              {" "}
              Add to cart
            </button>
            <ToastContainer />
          </div>
          <div className="pt-6">
            {InStock ? (
              <span className="text-green-500">InStock</span>
            ) : (
              <span className="text-red-500">Out of Stock</span>
            )}
          </div>
          <div className="font-medium">
            Category:{" "}
            <span className="font-normal pl-1"> {product?.category}</span>
          </div>
          <div className="font-medium">
            Brand: <span className="font-normal pl-1">{product?.brand}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
