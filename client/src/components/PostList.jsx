import { useInfiniteQuery } from "@tanstack/react-query";
import PostListItem from "./PostListItem";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchPosts = async (pageParam) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam, limit: 3 },
  });
  return res.data;
};

const PostList = () => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
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
      loader={<h4>Loading.more posts..</h4>}
      endMessage={
        <p>
          <b>All posts loaded!</b>
        </p>
      }
    >
      {allPost.map((post) => (
        <PostListItem key={post?._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
