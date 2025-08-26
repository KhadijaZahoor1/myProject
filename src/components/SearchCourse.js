import React, { useState } from "react";

const SearchCourse = ({ getSearchResults }) => {
  const [query, setQuery] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(query);

    const res = await fetch(`/courses/search?query=${query}`);
    const course = await res.json();
    getSearchResults(course);
  };
  return (
    <>
      <form className="text-center pt-5" onSubmit={handleSubmit}>
        <input
          className="border rounded p-3"
          type="text"
          placeholder="search course"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-cyan-800 text-white p-3 rounded ml-3"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchCourse;
