import ImageKit from "../components/ImageKit";
import { Link, useParams } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import InputSearch from "../components/InputSearch";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";
import DOMPurify from "dompurify";

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return `Loading...`;
  if (error) return `Something went wrong! ${error.message}`;
  if (!data) return `Data Post Not Found!`;

  const sanitizedContent = DOMPurify.sanitize(data?.content);
  return (
    <div className="flex flex-col py-8 gap-8">
      {/* Details */}
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        {/* title and author */}
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl  font-semibold">
            {data?.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{data?.user?.username}</Link>
            <span>on</span>
            <Link className="text-blue-800">{data?.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium text-justify">{data.desc}</p>
        </div>
        {/* image */}
        <div className="w-full md:hidden lg:block lg:w-2/5">
          {data.img ? (
            <ImageKit
              src={data.img || "not-foud-img.jpg"}
              className={"rounded-2xl"}
            />
          ) : (
            <ImageKit src={"not-foud-img.jpg"} className={"rounded-2xl"} />
          )}
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <div
            className="rich-text"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          ></div>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {data?.user?.img ? (
                <img
                  src={data?.user?.img}
                  alt=""
                  className="w-10 h-10 rounded-full border border-blue-800 object-cover"
                />
              ) : (
                <ImageKit
                  src={"userImg.jpeg"}
                  className={"w-12 h-12 rounded-full object-cover"}
                  width={"48"}
                  height={"48"}
                />
              )}
              <Link className="text-blue-800">{data?.user?.username}</Link>
            </div>
            <p className="text-sm text-gray-500">
              {data?.user?.desc || "I am a guest user"}
            </p>
            <div className="flex gap-2">
              <Link>
                <ImageKit src={"facebook.svg"} />
              </Link>
              <Link>
                <ImageKit src={"instagram.svg"} />
              </Link>
            </div>
          </div>
          <PostMenuActions post={data} />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to={"/"}>
              All
            </Link>
            <Link className="underline" to={"/"}>
              Web Design
            </Link>
            <Link className="underline" to={"/"}>
              Development
            </Link>
            <Link className="underline" to={"/"}>
              Databases
            </Link>
            <Link className="underline" to={"/"}>
              Search Engines
            </Link>
            <Link className="underline" to={"/"}>
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <InputSearch />
        </div>
      </div>
      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePostPage;
