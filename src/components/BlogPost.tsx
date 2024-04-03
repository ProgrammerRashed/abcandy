import Image from "next/image";

const BlogPost = ({ data, isFeatured }: any) => {
  
  return (
    <div className="w-full text-text-primary h-full">
      {/* CARD HEAD */}
      <div className={`"image-container relative ${isFeatured ? "h-[400px]" : "h-[250px]"} w-full overflow-hidden"`}>
        <Image
          src={data?.imageSrc}
          alt={data?.title}
          fill
          className="object-cover"
        />
      </div>
      {/* CARD BODY */}
      <div className={`"card-body bg-[#F5F4FB] py-2 px-5 ${isFeatured ? "h-[250px]" : "h-[290px]"} "`}>
        <div className="publish-meta flex gap-3">
          <p className="category font-semibold uppercase">{data?.category}</p>
          <p className="Date">{data?.date}</p>
        </div>
        {/* CARD CONTENT */}
        <div className="content space-y-5">
          <h1 className="text-2xl ">{data?.title}</h1>
          <p className="text-text-muted space-y-4">{data?.content}</p>
        </div>

        {/* CARD FOOTER */}

        <div className="mt-5">
          {/* CTA */}

          {data?.button && (
            <button className="text-text-button px-3 py-2 border border-text-button">
           { data?.button} 
            </button>
          )}

          {/* AUTHOR DETAILS */}
          { data?.author && (
            <h3 className="mt-3 text-text-muted">
              by <span className="font-bold"> { data?.author} </span>
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
