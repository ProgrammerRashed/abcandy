//@ts-nocheck
"use client";
import getJsonData from "@/utils/getJsonData";
import React from "react";
import BlogPost from "./BlogPost";

const BlogContainer = () => {
  const [selectedBlogs, setSelectedBlogs] = React.useState([]);

  React.useEffect(() => {
    const rawData = getJsonData();
    const allBlogs = rawData.filter((singleData) =>
      singleData.tags.includes("regular")
    );
    setSelectedBlogs(allBlogs.slice(0, 3));
  }, []);

  const handleLoadMore = () => {
    const rawData = getJsonData(); // Fetch the data again
    const allBlogs = rawData.filter((singleData) =>
      singleData.tags.includes("regular")
    );
    setSelectedBlogs(allBlogs);
  };

  return (
    <div className="my-20">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3  gap-10">
        {selectedBlogs?.map((singleBlog, index) => {
          return (
            <div key={index}>
              <BlogPost data={singleBlog} />
            </div>
          );
        })}
      </div>

      {/* ALL BLOGS CTA */}
      <div className="text-center mt-10">
        <button
          onClick={() => {
            handleLoadMore();
          }}
          className="border border-text-button font-medium text-text-button px-5 py-2"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogContainer;
