const BlogBanner = () => {
  return (
    <div>
        <div className="bg-[#20172d] py-10 lg:py-24 my-12" style={{backgroundImage: `url('https://i.ibb.co/17HtQ73/blog-banner-bg.jpg')`, backgroundBlendMode: "color-dodge", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="content p-6 lg:p-12 bg-white/10 backdrop-blur-lg w-[80%] lg:w-[60%] mx-auto text-center space-y-5">
              <h1 className="text-white text-3xl">Creative team, intuitive solution</h1>
              <p className="text-white/80">
                Lorem ipsum dolor sit amet consectetur. Enim vitae hendrerit
                consectetur cras in nulla. Non suspendisse at ac enim. Facilisi
                nulla tortor nec mollis faucibus odio sodales.
              </p>
              <button className="bg-white px-3 py-2">Let&apos;s Talk</button>
            </div>
          </div>
    </div>
  )
}

export default BlogBanner
