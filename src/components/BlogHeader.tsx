import { CiSearch } from "react-icons/ci";
const BlogHeader = () => {
  return (
    <div className="text-text-primary my-8 flex flex-col lg:flex-row justify-between items-center -mt-96">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <h1 className="text-4xl font-bold ">Blog</h1>
        <div className="hidden lg:flex gap-3">
          <div className="tag bg-[#2C23471A] px-5 py-2 inline-block rounded-full">
            Sport
          </div>
          <div className="tag bg-[#2C23471A] px-5 py-2 inline-block rounded-full">
            Sport Car
          </div>
          <div className="tag bg-[#2C23471A] px-5 py-2 inline-block rounded-full">
            Bike
          </div>
        </div>
      </div>
      <div>
        <div className="input-group relative lg:mt-0 mt-5 ">
          <input
            type="text"
            className="bg-[#f8f0ff] w-[300px] h-10 border-2 border-white py-3 pl-12 rounded-full outline-none"
            placeholder="Search"
          />

          <div  className="absolute top-0 left-0 translate-x-1/2 translate-y-[35%] ">
            <CiSearch className="text-2xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
