import ImageKit from "./ImageKit";
import { format } from "timeago.js";

const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-2">
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
