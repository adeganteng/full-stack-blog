import { Link } from "react-router-dom";
import ImageKit from "./ImageKit";

const PostListItem = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-8 mb-8">
        {/* Image */}
        <div className="md:hidden xl:block xl:w-1/3">
          <ImageKit
            src={"postImg.jpeg"}
            className={"object-cover rounded-2xl"}
            width={"735"}
          />
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
          <Link to={"/test"} className="text-4xl font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
            exercitationem quis.
          </Link>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className=" text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className=" text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            animi voluptas dolores possimus dolorum voluptatum at assumenda
            harum tempora dicta. Ad deleniti, vel modi cum error mollitia.
            Doloremque, rem harum distinctio,
          </p>
          <Link to="/test" className="text-blue-800 text-sm underline">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostListItem;
