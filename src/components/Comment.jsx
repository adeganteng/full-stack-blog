import ImageKit from "./ImageKit";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <ImageKit
          src={"userImg.jpeg"}
          className={"w-10 h-10 rounded-full"}
          width={"40"}
        />
        <span className="font-medium">John Doe</span>
        <span className="text-gray-500 text-sm">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          nobis sed rerum! Quaerat nihil inventore quidem assumenda maxime nisi
          ipsum minima, optio nobis cumque sunt deleniti tenetur perspiciatis
          sint rerum!
        </p>
      </div>
    </div>
  );
};

export default Comment;
