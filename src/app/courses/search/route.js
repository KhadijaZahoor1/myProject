import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredCourses);
}

// const res = await fetch(
//   `/https://dummyjson.com/products/search?query=${query}`
// );
// const single = await res.json();

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const query = searchParams.get("query");
//   const filteredCourses = single.filter((single) => {
//     return single.title.toLowerCase().includes(query.toLowerCase());
//   });
//   return NextResponse.json(filteredCourses);
// }
