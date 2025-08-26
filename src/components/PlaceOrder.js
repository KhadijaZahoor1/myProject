"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { emptyCart } from "@/redux/cartSlice";

const PlaceOrder = ({ data, onEdit }) => {
  console.log("full name", data);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  ///
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  //// toastify
  const showToastMessage = () => {
    toast.success("Your order place successfully *_*", {
      position: toast.POSITION.TOP_CENTER,
    });
    dispatch(emptyCart());
  };

  return (
    <>
      <div className="container mx-auto py-10 px-24">
        <h1 className="mb-6 text-xl font-semibold">Place Order</h1>
        <div className="flex gap-6">
          <div className="w-3/4">
            <div className="border rounded border-gray-200 p-5">
              <h2 className="text-lg font-medium mb-2">Shipping Address</h2>
              <div>
                <p className="mb-3">
                  {data?.fullName} {data?.address} {data?.postalCode}{" "}
                  {data?.city} {data?.country}
                </p>
                <button
                  onClick={onEdit}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Edit
                </button>
              </div>
            </div>
            {/* pyament */}
            <div className="border rounded border-gray-200 p-5 my-3">
              <h2 className="text-lg font-medium mb-2">Payment</h2>
              <div>
                <p className="mb-3">{data?.paymentMethod}</p>
                <button
                  onClick={onEdit}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Edit
                </button>
              </div>
            </div>
            {/* products */}
            {/* <div className="border rounded border-gray-200 p-5">
              <h2 className="text-lg font-medium mb-2">Items</h2>
              <div>
                <p className="mb-3">addressss................</p>
                <Link href="" className="px-4 py-2 bg-gray-200 rounded ">
                  Edit
                </Link>
              </div>
            </div> */}
          </div>

          {/* total price card */}
          <div className="w-1/4 border rounded border-gray-200 p-5">
            <h2 className="text-lg font-medium mb-2">Order Summary</h2>
            <div className="flex justify-between items-center">
              <span>Total Items</span>
              <span>{getItemsCount()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Tax</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Shipping</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Total</span>
              <span>{getTotalPrice()}</span>
            </div>
            <div>
              <button
                onClick={showToastMessage}
                className="bg-cyan-800 text-white py-3 rounded w-full"
              >
                Place Order
              </button>
              <ToastContainer autoClose={2000} />
              <button className="mt-2 w-full border border-cyan-800 text-cyan-800 hover:bg-cyan-800 hover:text-white py-3 rounded text-center">
                <Link href="/" className="">
                  {" "}
                  Back to home
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
