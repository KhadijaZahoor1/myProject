import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumbs = ({ breadCrumbs }) => {
  return (
    <>
      <section className="py-5 sm:py-7 bg-cyan-800 mb-5">
        <div className="container max-w-screen-xl mx-auto px-4">
          <ol className="inline-flex flex-wrap space-x-1 md:space-x-3 items-center text-white">
            {breadCrumbs?.map((breadCrumb, index) => (
              <li key={index} className="inline-flex items-center gap-1 !ml-1 ">
                <Link
                  href={breadCrumb.url}
                  className="text-white hover:text-black"
                >
                  {breadCrumb.name}
                </Link>
                {breadCrumbs?.length - 1 !== index && <IoIosArrowForward />}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default BreadCrumbs;
