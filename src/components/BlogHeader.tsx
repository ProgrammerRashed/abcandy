import { CiSearch } from "react-icons/ci";
const BlogHeader = () => {
  return (
    <div className="text-text-primary my-8 flex justify-between items-center -mt-80">
      <div className="flex gap-10 items-center">
        <h1 className="text-5xl font-bold ">Blog</h1>
        <div className="flex gap-3">
          <div className="tag bg-[#dee5ed] px-5 py-3 inline-block rounded-full">
            Sport
          </div>
          <div className="tag bg-[#dee5ed] px-5 py-3 inline-block rounded-full">
            Sport Car
          </div>
          <div className="tag bg-[#dee5ed] px-5 py-3 inline-block rounded-full">
            Bike
          </div>
        </div>
      </div>
      <div>
        <div className="input-group relative">
          <input
            type="text"
            className="bg-[#f8f0ff] border-2 border-white py-3 pl-12 rounded-full outline-none"
            placeholder="Search"
          />

          <div  className="absolute top-0 left-4 translate-y-3 ">
            <CiSearch className="text-2xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
