import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
import { useSearchParams } from "react-router-dom";

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold">
        {searchParams
          .get("cat")
          .charAt(0)
          .toUpperCase()
          .concat(searchParams.get("cat").slice(1)) || "All"}{" "}
        Post
      </h1>
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-800 text-sm text-white py-2 px-4 rounded-2xl mb-4 md:hidden transition-all duration-500 ease-in-out"
      >
        {open ? "Close" : "Filter or Search"}
      </button>

      <div className="flex gap-8 max-md:flex-col-reverse">
        <div className="flex-1">
          <PostList />
        </div>
        <div
          className={
            open
              ? "block"
              : "hidden md:block transition-all duration-1000 ease-in-out"
          }
        >
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
