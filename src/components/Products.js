"use client";

import { addToCart } from "@/redux/cartSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Category from "./filters/Category";

const Products = ({ products }) => {
  ///// dispatch products here
  const dispatch = useDispatch();
  const btnAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  //console.log(products);

  //// search products by applying diff filters

  return (
    <>
      <div className="container mx-auto flex flex-row gap-7 py-10 px-24">
        <div className="w-1/4 rounded border-gray-200 border p-6">
          <div>
            <h2>Prices</h2>
            <hr />
          </div>
          <div>
            <h4>Category</h4>
            <Category />
            <hr />
          </div>
          <div>
            <h4>Rating</h4>
            <hr />
          </div>
        </div>
        <div className="w-3/4">
          {products?.map((product, index) => {
            return (
              <div
                key={index}
                className="rounded border-gray-200 border p-6 flex"
              >
                <div className="w-3/4">
                  <Link href={`/repo/${product?.id}`} className="flex gap-5">
                    <img
                      src={product?.thumbnail}
                      alt="Picture of the author"
                      width={300}
                      height={200}
                      className="rounded"
                    />
                    <div>
                      {" "}
                      <div className="text-xl font-medium">
                        {product?.title}
                      </div>
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
                      <div className="py-3 pr-4">
                        {product?.description} Lorem ipsum dolor sit amet
                        consectetur adipiscing elit sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="w-1/4 pl-6 border-l border-l-gray-200">
                  <div className="font-medium"> ${product?.price}</div>
                  <div className="text-green-500 mt-1">Free Shipping</div>
                  <div className="mt-6">
                    {" "}
                    <button
                      onClick={() => btnAddToCart(product)}
                      className="bg-cyan-800 text-white rounded p-3"
                    >
                      Add to cart
                    </button>
                    <ToastContainer autoClose={2000} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
