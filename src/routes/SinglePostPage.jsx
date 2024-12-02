import ImageKit from "../components/ImageKit";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import InputSearch from "../components/InputSearch";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col py-8 gap-8">
      {/* Details */}
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        {/* title and author */}
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl  font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            quisquam?
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            recusandae debitis omnis, illum possimus facilis, dolore voluptas
            eius unde velit nulla, rerum laboriosam! Eligendi, molestias
            officiis sapiente magnam culpa eum possimus suscipit similique eius
            explicabo facilis ipsa voluptates unde aperiam.
          </p>
        </div>
        {/* image */}
        <div className="w-full md:hidden lg:block lg:w-2/5">
          <ImageKit src={"postImg.jpeg"} className={"rounded-2xl"} />
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla aliquid quisquam nostrum dolorum quo!
            Repellendus quisquam inventore obcaecati sit cum sint numquam
            aliquam. Temporibus quia ea reiciendis, blanditiis nisi voluptatum
            consectetur quos et beatae delectus culpa numquam, deleniti
            praesentium error pariatur corporis voluptates ratione ex facere
            amet tempore, quisquam non eligendi perferendis! Fuga, dolores illum
            praesentium nobis fugiat explicabo?
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <ImageKit
                src={"userImg.jpeg"}
                className={"w-12 h-12 rounded-full object-cover"}
                width={"48"}
                height={"48"}
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex gap-2">
              <Link>
                <ImageKit src={"facebook.svg"} />
              </Link>
              <Link>
                <ImageKit src={"instagram.svg"} />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to={"/"}>
              All
            </Link>
            <Link className="underline" to={"/"}>
              Web Design
            </Link>
            <Link className="underline" to={"/"}>
              Development
            </Link>
            <Link className="underline" to={"/"}>
              Databases
            </Link>
            <Link className="underline" to={"/"}>
              Search Engines
            </Link>
            <Link className="underline" to={"/"}>
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <InputSearch />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
