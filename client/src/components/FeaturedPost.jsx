import { Link } from "react-router-dom";
import ImageKit from "./ImageKit";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
  );
  return res.data;
};

const FeaturedPost = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPost"],
    queryFn: () => fetchPost(),
  });

  if (isPending) return `Loading...`;
  if (error) return `Something went wrong! ${error.message}`;
  const posts = data.posts;

  if (!posts || posts.length === 0) return;

  console.log(posts);
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        {posts[0]?.img ? (
          <ImageKit
            src={posts[0]?.img}
            className={"rounded-3xl object-cover"}
            width={"895"}
          />
        ) : (
          <ImageKit
            src={"not-foud-img.jpg"}
            className={"rounded-3xl object-cover"}
            width={"895"}
          />
        )}
        {/* details */}
        <div className=" flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link
            to={`/post?cat=${posts[0]?.category}`}
            className="text-blue-800 lg:text-lg"
          >
            {posts[0]?.category}
          </Link>
          <span className="text-gray-500">{format(posts[0]?.createdAt)}</span>
        </div>
        {/* Title */}
        <Link
          to={posts[0]?.slug}
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {posts[0]?.title}
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        {posts[1] && (
          <div className="lg:h-1/3 flex justify-between gap-4">
            {/* Image */}
            {posts[1]?.img ? (
              <ImageKit
                className={"rounded-3xl object-cover w-1/3 aspect-video"}
                src={posts[1]?.img}
              />
            ) : (
              <ImageKit
                className={"rounded-3xl object-cover w-1/3 aspect-video"}
                src={"not-foud-img.jpg"}
              />
            )}
            {/* details and title */}
            <div className="w-2/3 ">
              {/* details */}
              <div className=" flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">02.</h1>
                <Link
                  to={`/post?cat=${posts[1]?.category}`}
                  className="text-blue-800"
                >
                  {posts[1]?.category}
                </Link>
                <span className="text-gray-500">
                  {format(posts[1]?.createdAt)}
                </span>
              </div>
              {/* title */}
              <Link
                to={posts[1]?.slug}
                className=" text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                {posts[1]?.title}
              </Link>
            </div>
          </div>
        )}
        {/* third */}
        {posts[2] && (
          <div className="lg:h-1/3 flex justify-between gap-4">
            {/* Image */}
            {posts[2]?.img ? (
              <ImageKit
                className={"rounded-3xl object-cover w-1/3 aspect-video"}
                src={posts[2]?.img}
              />
            ) : (
              <ImageKit
                className={"rounded-3xl object-cover w-1/3 aspect-video"}
                src={"not-foud-img.jpg"}
              />
            )}
            {/* details and title */}
            <div className="w-2/3 ">
              {/* details */}
              <div className=" flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">03.</h1>
                <Link
                  to={`/post?cat=${posts[2]?.category}`}
                  className="text-blue-800"
                >
                  {posts[2]?.category}
                </Link>
                <span className="text-gray-500">
                  {format(posts[2]?.createdAt)}
                </span>
              </div>
              {/* title */}
              <Link
                to={posts[2]?.slug}
                className=" text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                {posts[2]?.title}
              </Link>
            </div>
          </div>
        )}
        {/* fourth */}
        {posts[3] && (
          <div className="lg:h-1/3 flex justify-between gap-4">
            {/* Image */}
            {posts[3]?.img ? (
              <ImageKit
                className={"rounded-3xl object-cover w-1/3 aspect-video"}
                src={posts[3]?.img}
              />
            ) : (
              <ImageKit
                className={"rounded-3xl object-cover w-1/3 aspect-video"}
                src={"not-foud-img.jpg"}
              />
            )}
            {/* details and title */}
            <div className="w-2/3 ">
              {/* details */}
              <div className=" flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">04.</h1>
                <Link
                  to={`/post?cat=${posts[3]?.category}`}
                  className="text-blue-800"
                >
                  {posts[3]?.category}
                </Link>
                <span className="text-gray-500">
                  {format(posts[3]?.createdAt)}
                </span>
              </div>
              {/* title */}
              <Link
                to={posts[3]?.slug}
                className=" text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                {posts[3]?.title}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedPost;
