import Image from "next/image";

const BlogPost = ({ data, isFeatured }: any) => {
  
  return (
    <div className="w-full text-text-primary h-full">
      {/* CARD HEAD */}
      <div className={`"image-container relative ${isFeatured ? "xl:h-[400px] lg:h-[250px] h-[250px]" : "h-[250px]"} w-full overflow-hidden"`}>
        <Image
          src={data?.imageSrc}
          alt={data?.title}
          fill
          className="object-cover"
        />
      </div>
      {/* CARD BODY */}
      <div className={`"card-body bg-[#F5F4FB] px-5  py-4  ${isFeatured ? "h-auto lg:h-[250px]" : "h-auto lg:h-[290px]"} "`}>
        <div className="publish-meta flex gap-3 text-sm font-dm">
          <p className="category font-semibold uppercase">{data?.category}</p>
          <p className="Date">{data?.date}</p>
        </div>
        {/* CARD CONTENT */}
        <div className="content pt-4 space-y-2">
          <h1 className="text-2xl font-lora font-medium">{data?.title}</h1>
          <p className="text-text-muted font-dm text-base">{data?.content}</p>
        </div>

        {/* CARD FOOTER */}

        <div className="mt-5">
          {/* CTA */}

          {data?.button && (
            <button className="text-text-button px-5 font-medium font-dm py-2 border border-text-button">
           { data?.button} 
            </button>
          )}

          {/* AUTHOR DETAILS */}
          { data?.author && (
            <h3 className="mt-3 text-text-muted font-dm text-base">
              by <span className="font-medium"> { data?.author} </span>
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
