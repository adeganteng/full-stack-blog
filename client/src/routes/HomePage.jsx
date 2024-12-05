import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPost from "../components/FeaturedPost";
import PostList from "../components/PostList";

const HomePage = () => {
  return (
    <div className="mt flex flex-col gap-4">
      {/* Breadcrumbs */}
      <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        <span>·</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* Introduction */}
      <div className=" flex items-center justify-between">
        <div>
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Welcome to ADEFX Blog, post your blogs and articles here
          </h1>
          <p className=" mt-8 text-base md:text-xl">
            If you have an idea, you can post blogs and articles
          </p>
        </div>
        {/* animate-button */}
        <Link to="/write" className="relative hidden md:block">
          <svg
            viewBox="0 0 200 200"
            width={"200"}
            height={"200"}
            className=" text-lg tracking-widest animate-spin  animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1, 1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset={"0%"}>
                Write your story ·
              </textPath>
              <textPath href="#circlePath" startOffset={"50%"}>
                Share your idea ·
              </textPath>
            </text>
          </svg>
          <button className="absolute inset-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <ArrowUpRight size={50} className="text-white font-bold" />
          </button>
        </Link>
      </div>
      {/* Categories */}
      <MainCategories />
      {/* Featured Post */}
      <FeaturedPost />
      {/* Recent Posts */}
      <div className="flex flex-col">
        <h1 className="my-8 text-2xl text-gray-600 ">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
