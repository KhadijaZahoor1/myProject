import { addCategory } from "@/redux/categorySlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();

  const selectedCategories = useSelector((state) => state.selectedCategories);

  const getCategories = async () => {
    await fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        dispatch(selectedCategories(data));
      })
      .catch((err) => alert(err));
  };
  return (
    <>
      {selectedCategories?.map((category) => (
        <div onClick={() => dispatch(addCategory(category))} className=""></div>
      ))}
    </>
  );
};

export default Category;
