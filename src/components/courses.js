import Link from "next/link";
import React from "react";

const Courses = ({ courses }) => {
  return (
    <>
      <div className="container mx-auto py-10 px-[400px] flex flex-col justify-center gap-5">
        {courses.map((item) => {
          return (
            <>
              <Link href={`/${item.id}`}>
                <div className="bg-gray-300 p-7 rounded">
                  <div className="text-lg font-medium">{item.title}</div>
                  <div className="py-3">{item.description}</div>
                  <div>Level: {item.level}</div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
