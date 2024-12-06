import { useInfiniteQuery } from "@tanstack/react-query";
import PostListItem from "./PostListItem";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";

const fetchPosts = async (pageParam, searchParams) => {
  const searchParamsObj = Object.fromEntries([...searchParams]);

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam, limit: 5, ...searchParamsObj },
  });
  return res.data;
};

const PostList = () => {
  const [searcParams, setSearchParams] = useSearchParams();

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["posts", searcParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searcParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  if (isFetching === "loading") return "Loading...";
  if (isFetching === "error") return "Something went wrong!";

  const allPost = data?.pages?.flatMap((page) => page.posts) || [];

  return (
    <InfiniteScroll
      dataLength={allPost.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      endMessage={
        <p>
          <b>All posts loaded!</b>
        </p>
      }
    >
      {allPost.length > 0 ? (
        allPost.map((post) => <PostListItem key={post._id} post={post} />)
      ) : (
        <p className="w-full text-center">Posts Not Found</p>
      )}
    </InfiniteScroll>
  );
};

export default PostList;
