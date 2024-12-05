import { useAuth, useUser } from "@clerk/clerk-react";
import { Image, ListCollapse, Loader, VideoIcon } from "lucide-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";

const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [valueContent, setValueContent] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const { getToken } = useAuth();

  useEffect(() => {
    img &&
      setValueContent((prev) => prev + `<p><image src="${img.url}" /></p>`);
  }, [img]);
  useEffect(() => {
    video &&
      setValueContent(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}" /></p>`
      );
  }, [video]);

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created", { theme: "dark" });
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return (
      <div className="flex items-center gap-2">
        Loading...
        <Loader className="animate-spin" />
      </div>
    );
  }

  if (isLoaded && !isSignedIn) {
    return <div>You should be signed in to write a post</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: valueContent,
    };

    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 py-8">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <Upload setData={setCover} type={"image"} setProgress={setProgress}>
          <button
            type="button"
            className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white"
          >
            Add a cover image
          </button>
        </Upload>

        <input
          className="text-4xl bg-transparent font-semibold outline-none"
          type="text"
          placeholder="My Awesome Story"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md outline-none"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          placeholder="A Short Description"
          name="desc"
        />
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2">
            <Upload setData={setImg} type={"image"} setProgress={setProgress}>
              <Image className="text-blue-800 font-bold" size={20} />
            </Upload>
            <Upload setData={setVideo} type={"video"} setProgress={setProgress}>
              <VideoIcon className="text-blue-800 font-bold" size={20} />{" "}
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md "
            onChange={setValueContent}
            value={valueContent}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="w-36 bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {"Progrress: " + progress}
        {mutation.isError && (
          <span className="text-red-500 mt-4">{mutation.error.message}</span>
        )}
      </form>
    </div>
  );
};

export default WritePage;
