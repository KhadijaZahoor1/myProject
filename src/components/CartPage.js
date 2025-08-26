"use client";

import { decrementQuantity, removeFromCart } from "@/redux/cartSlice";
import { incrementQuantity } from "@/redux/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  ///
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  ///
  return (
    <>
      <div className="container mx-auto py-10 px-24 flex flex-row gap-7">
        {cart.length === 0 ? (
          <h1>Your Cart is Empty!</h1>
        ) : (
          <>
            <div className="w-3/4 border rounded border-gray-200 py-8 pl-5 pr-8">
              {cart?.map((product) => (
                <>
                  <div className="grid grid-cols-5 text-center text-base items-center my-6">
                    <div className="">
                      <Image
                        src={product?.thumbnail}
                        height="150"
                        width="150"
                        className="mx-auto"
                      />
                    </div>
                    <div>{product?.title}</div>
                    <div className="flex gap-5 justify-center">
                      <span>
                        <button
                          className="border rounded border-rgb[121, 121, 121] px-2"
                          onClick={() =>
                            dispatch(decrementQuantity(product?.id))
                          }
                        >
                          -
                        </button>
                      </span>
                      <span>{product?.quantity}</span>
                      <span>
                        <button
                          className="border rounded border-rgb[121, 121, 121] px-2"
                          onClick={() =>
                            dispatch(incrementQuantity(product?.id))
                          }
                        >
                          +
                        </button>
                      </span>
                    </div>
                    <div>$ {product?.quantity * product?.price}</div>
                    <div>
                      {" "}
                      <span
                        className="bg-cyan-800 text-white p-2 rounded flex justify-center  cursor-pointer"
                        onClick={() => dispatch(removeFromCart(product?.id))}
                      >
                        Remove
                      </span>
                    </div>
                  </div>
                  <hr className="mx-auto w-[95%]" />
                </>
              ))}
            </div>

            <div className="w-1/4 border rounded border-gray-200 py-8 px-5 max-h-[260px]">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium">
                  Total Items : {getItemsCount()}
                </h3>
                <h2 className="text-lg font-medium ">
                  Total price = $ {getTotalPrice()}
                </h2>
                <button className="bg-cyan-800 text-white py-3 rounded">
                  <Link href="/shipping"> Proceed to checkout</Link>
                </button>
                <Link
                  href="/repo"
                  className=" border border-cyan-800 text-cyan-800 hover:bg-cyan-800 hover:text-white py-3 rounded text-center"
                >
                  Back to shop
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
