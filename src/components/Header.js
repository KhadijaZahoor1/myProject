"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  const totalItems = useMemo(() => getItemsCount(), [cart]);

  const handleSubmit = () => {
    router.push("/repo");
  };
  return (
    <>
      <div className="bg-cyan-800 text-white py-5">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            {" "}
            <h1 className="text-xl">Next App</h1>
          </Link>
          <form className="text-center" onSubmit={handleSubmit}>
            <input
              className="border rounded p-3 text-black focus:outline-none"
              type="text"
              placeholder="search product"
            />
            <button
              className=" text-cyan-800 border border-cyan-800 bg-white p-3 rounded ml-3"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="flex items-center gap-5 text-base">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/repo">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about/team">Team</Link>
            </li>
            <li>
              <Link href="/cart">Cart ({totalItems})</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
