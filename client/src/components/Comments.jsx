import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};

const Comments = ({ postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      console.log(token);
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success(res.data || "Comment created", { theme: "dark" });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message || "Invalid create comment", { theme: "dark" });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      desc: formData.get("desc"),
    };

    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={onSubmit}
        className="flex items-center justify-between gap-8 w-full"
      >
        <textarea
          placeholder="Write your comment here..."
          className="p-4 w-full rounded-xl  "
          name="desc"
        />
        <button
          disabled={mutation.isPending}
          className="bg-blue-800 text-white py-3 px-4 rounded-xl disabled:bg-blue-400"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
      </form>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Error loading comments!"
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                desc: `${mutation.variables.desc} (Sending...)`,
                createdAt: new Date(),
                user: {
                  img: user.imageUrl,
                  user: user.username,
                },
              }}
            />
          )}

          {data.length > 0 ? (
            data?.map((comment) => (
              <Comment key={comment._id} comment={comment} />
            ))
          ) : (
            <div>
              <p className="text-lg font-bold">Comment Not found</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Comments;
