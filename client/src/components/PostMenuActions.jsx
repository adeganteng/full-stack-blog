import { Bookmark, LucideTrash2 } from "lucide-react";

const PostMenuActions = () => {
  return (
    <div className="">
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <Bookmark size={24} />
        <span>Save this post</span>
      </div>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <LucideTrash2 className="text-red-500" size={24} />
        <span>Delete this post</span>
      </div>
    </div>
  );
};

export default PostMenuActions;
