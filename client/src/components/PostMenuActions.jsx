import { useAuth, useUser } from "@clerk/clerk-react";
import { Bookmark, Loader, LucideTrash2, Star } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PostMenuActions = ({ post }) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  const {
    isPending,
    error,
    data: savedPosts,
  } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: async () => {
      const token = await getToken();
      return await axios.get(`${import.meta.env.VITE_API_URL}/users/saved`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const isAdmin = user?.publicMetadata?.role === "admin" || false;
  const isSaved = savedPosts?.data.some((p) => p === post._id) || false;

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();

      return await axios.delete(
        `${import.meta.env.VITE_API_URL}/posts/${post._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Post deleted successfully", { theme: "dark" });
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.response.data || "Post deleted failed", {
        theme: "dark",
      });
    },
  });

  const saveMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/save`,
        {
          postId: post._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedPosts"] });
      if (!isSaved) {
        toast.success("Posts saved successfully", { theme: "dark" });
      } else {
        toast.success("Posts unsaved successfully", { theme: "dark" });
      }
    },
    onError: (error) => {
      toast.error(error.response.data || "Saved post failed", {
        theme: "dark",
      });
    },
  });

  const featureMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return await axios.patch(
        `${import.meta.env.VITE_API_URL}/posts/feature`,
        {
          postId: post._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post", post.slug] });
      if (!post.isFeatured) {
        toast.success("Post featured successfully", { theme: "dark" });
      } else {
        toast.success("Post unfeatured successfully", { theme: "dark" });
      }
    },
    onError: (error) => {
      toast.error(error.response.data || "Saved post failed", {
        theme: "dark",
      });
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  const handleFeature = () => {
    featureMutation.mutate();
  };

  const handleSavedPost = () => {
    if (!user) {
      return navigate("/login");
    }
    saveMutation.mutate();
  };
  return (
    <div className="">
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Saved post fetching failed"
      ) : (
        <div
          className="flex items-center gap-2 py-2 text-sm cursor-pointer"
          onClick={handleSavedPost}
        >
          <Bookmark size={24} fill={isSaved ? "black" : "none"} />
          <span>{isSaved ? "Saved" : "Save this post"}</span>
          {saveMutation.isPending && (
            <span>
              <Loader size={18} className="animate-spin" />
            </span>
          )}
        </div>
      )}
      {isAdmin && (
        <div
          onClick={handleFeature}
          className="flex items-center gap-2 py-2 text-sm cursor-pointer"
        >
          <Star
            size={24}
            className={`${post.isFeatured ? "text-transparent" : ""}`}
            fill={post.isFeatured ? "yellow" : "none"}
          />
          <span>
            {post.isFeatured ? "Unfeature this post" : "Feature this post"}
          </span>

          {featureMutation.isPending && (
            <Loader size={18} className="animate-spin" />
          )}
        </div>
      )}
      {user && (post.user.username === user.username || isAdmin) && (
        <div
          onClick={handleDelete}
          className="flex items-center gap-2 py-2 text-sm cursor-pointer"
        >
          <LucideTrash2 className="text-red-500" size={24} />
          <span>Delete this post</span>
          {deleteMutation.isPending && (
            <span className="text-xs">(in progess)</span>
          )}
        </div>
      )}
    </div>
  );
};

export default PostMenuActions;
