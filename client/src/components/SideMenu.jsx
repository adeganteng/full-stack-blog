import React from "react";
import InputSearch from "./InputSearch";
import { Link, useSearchParams } from "react-router-dom";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (e) => {
    if (searchParams.get("sort") !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        sort: e.target.value,
      });
    }
  };

  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        cat: category,
      });
    }
  };
  return (
    <div className="px-4 sticky top-8">
      <h1 className="mb-4 text-sm font-medium ">Search</h1>
      <InputSearch />

      <h1 className="mb-4 text-sm font-medium mt-8">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            onChange={handleFilterChange}
            name="sort"
            value={"newest"}
            className="appearance-none cursor-pointer w-4 h-4 border-[1.5px] border-blue-800 rounded-sm bg-white checked:bg-blue-800 "
          />
          Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            onChange={handleFilterChange}
            name="sort"
            value={"popular"}
            className="appearance-none cursor-pointer w-4 h-4 border-[1.5px] border-blue-800 rounded-sm bg-white checked:bg-blue-800 "
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            onChange={handleFilterChange}
            name="sort"
            value={"trending"}
            className="appearance-none cursor-pointer w-4 h-4 border-[1.5px] border-blue-800 rounded-sm bg-white checked:bg-blue-800 "
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            onChange={handleFilterChange}
            name="sort"
            value={"oldest"}
            className="appearance-none cursor-pointer w-4 h-4 border-[1.5px] border-blue-800 rounded-sm bg-white checked:bg-blue-800 "
          />
          Oldest
        </label>
      </div>

      <h1 className="mb-4 text-sm font-medium mt-8">Category</h1>
      <div className="flex flex-col gap-2 text-sm">
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("")}
        >
          All
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("web-design")}
        >
          Web Design
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("development")}
        >
          Development
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("database")}
        >
          Databases
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("seo")}
        >
          Search Engine
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("marketing")}
        >
          Marketing
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
