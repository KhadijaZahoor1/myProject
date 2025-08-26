"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PlaceOrder from "./PlaceOrder";
import { useRouter } from "next/navigation";

const ShippingPage = () => {
  const router = useRouter();
  //// react hook form
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm();

  console.log(getValues());
  const [nextStep, setNextStep] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setNextStep(true);
    // router.push("/placeOrder");
  };

  const onEdit = () => {
    setNextStep(false);
  };
  return (
    <div className="my-12">
      <form
        className={`mx-auto max-w-screen-md ${nextStep ? "hidden" : ""}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-6 text-xl font-semibold">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="w-full border rounded p-3 text-black focus:outline-none"
            type="text"
            id="fullName"
            autoFocus
            {...register("fullName", {
              required: "Please enter full name",
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            className="w-full  border rounded p-3 text-black focus:outline-none"
            type="text"
            id="address"
            {...register("address", {
              required: "Please enter address",
              minLength: {
                value: 3,
                message: "Address is more than 2 chars",
              },
            })}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            className="w-full  border rounded p-3 text-black focus:outline-none"
            type="text"
            id="city"
            {...register("city", {
              required: "Please enter city",
            })}
          />
          {errors.city && (
            <div className="text-red-500 ">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            className="w-full  border rounded p-3 text-black focus:outline-none"
            type="text"
            id="postalCode"
            {...register("postalCode", {
              required: "Please enter postal code",
            })}
          />
          {errors.postalCode && (
            <div className="text-red-500 ">{errors.postalCode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="country">Country</label>
          <input
            className="w-full  border rounded p-3 text-black focus:outline-none"
            type="text"
            id="country"
            {...register("country", {
              required: "Please enter country",
            })}
          />
          {errors.country && (
            <div className="text-red-500 ">{errors.country.message}</div>
          )}
        </div>
        {/* payment method */}
        <h1 className="mb-6 text-xl font-semibold">Payment Method</h1>
        {["PayPal", "Stripe", "CashOnDelivery"].map((payment) => (
          <div key={payment} className="mb-4">
            <input
              name="paymentMethod"
              className="p-2 outline-none focus:ring-0"
              id={payment}
              type="radio"
              value={payment}
              {...register("paymentMethod", {
                required: "Please select payment method",
              })}
            />

            <label className="p-2" htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}
        {errors.paymentMethod && (
          <div className="text-red-500 ">{errors.paymentMethod.message}</div>
        )}
        <div className="mb-4 flex justify-between">
          <button className="bg-cyan-800 text-white py-3 px-5 rounded">
            Next
          </button>
        </div>
      </form>

      {nextStep ? <PlaceOrder data={getValues()} onEdit={onEdit} /> : null}
    </div>
  );
};

export default ShippingPage;
