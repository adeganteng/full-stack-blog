import { useAuth, useUser } from "@clerk/clerk-react";
import ImageKit from "./ImageKit";
import { format } from "timeago.js";
import { Loader, Trash } from "lucide-react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const Comment = ({ comment, postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const role = user?.publicMetadata?.role;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/comments/${comment._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success(res.data || "Comment delete successfully", {
        theme: "dark",
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message || "Delete comment failed", { theme: "dark" });
    },
  });

  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-2 relative">
      {user &&
        (comment.user.username === user.username || role === "admin") && (
          <button
            onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
            type="button"
            className="absolute top-5 right-2 flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-red-200 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
          >
            <span className="text-sm max-sm:hidden">
              {mutation.isPending ? "Deleting..." : "Delete"}
            </span>
            {mutation.isPending ? (
              <Loader className="animate-spin" size={16} />
            ) : (
              <Trash size={16} />
            )}
          </button>
        )}
      <div className="flex items-center gap-4">
        {comment.user.img ? (
          <img
            src={comment?.user?.img}
            alt=""
            className="w-10 h-10 rounded-full border border-blue-800 object-cover"
          />
        ) : (
          <ImageKit
            src={"userImg.jpeg"}
            className={"w-10 h-10 rounded-full"}
            width={"40"}
          />
        )}
        <span className="font-medium">{comment.user.username}</span>
        <span className="text-gray-500 text-sm">
          {format(comment.createdAt)}
        </span>
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment;
