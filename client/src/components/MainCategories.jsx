import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";

const MainCategories = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to={"/post"}
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Post
        </Link>
        <Link
          to={"/post?cat=web-design"}
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to={"/post?cat=development"}
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to={"/post?cat=web-design"}
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to={"/post?cat=seo"}
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Search Engine
        </Link>
        <Link
          to={"/post?cat=marketing"}
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <InputSearch />
    </div>
  );
};

export default MainCategories;
