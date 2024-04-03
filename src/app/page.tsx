import BlogPost from "@/components/BlogPost";
import NavigationBar from "@/components/NavigationBar";
import BlogBanner from "@/components/BlogBanner";
import FeatureCta from "@/components/FeatureCta";
import FooterComp from "@/components/FooterComp";
import BlogHeader from "@/components/BlogHeader";
import { Carousel } from "@/components/Carousel";
import SpacialPost from "@/components/SpacialPost";
import SpacialVideoPost from "@/components/SpeacialVideoPost";
import getJsonData from "@/utils/getJsonData";
import BlogContainer from "@/components/BlogContainer";

export default function Home() {
  const rawData = getJsonData();
  const data = rawData.filter((singleData) =>
    singleData.tags.includes("feature")
  )[0];

  return (
    <div className="font-dm">
      <div className="px-4 md:px-6 lg:px-10">
        <NavigationBar />
      </div>

      <main>
        <div
          style={{
            borderRadius: "0% 0% 48% 43% / 0% 0% 5% 6%",
            background:
              "linear-gradient(100deg, rgba(237,237,237,0.1) 15%, rgba(209,239,255,0.45) 30%, rgba(248,218,255,0.7) 98%)",
          }}
          className="h-[1070px]"
        >
          <Carousel />
        </div>

        {/* BLOGS SECTION */}
        <section className="container mx-auto mt-24 xl:p-0 px-3 md:px-5 lg:px-8">
          {/* BLOG HEADER */}
          <BlogHeader />

          <div className="blogs grid grid-cols-1 lg:grid-cols-2 gap-5">
            <SpacialPost />
            <SpacialVideoPost />
          </div>

          {/* BLOG BANNER */}
          <BlogBanner />

          {/* FEATURED BLOG SECTION */}
          <div className="featured-section w-full flex flex-col lg:flex-row justify-between overflow-hidden">
            <div className="lg:w-[960px] lg:h-[650px] w-full">
              <BlogPost data={data} isFeatured={true} />
            </div>
            <div
              style={{
                background: `linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), url('https://i.ibb.co/kHTR1HM/feature-bg.jpg')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="w-full lg:w-[300px] lg:h-[650px] lg:mt-0 h-full flex justify-center items-end"
            >
              <div className="h-[170px] w-[280px] ">
                <FeatureCta />
              </div>
            </div>
          </div>

          {/* ALL BLOGS */}
          <BlogContainer />
        </section>

        {/* FOOTER SECTION */}
        <section className="bg-text-primary py-10 px-4 md:px-6 lg:px-10">
          <FooterComp />
        </section>
      </main>
    </div>
  );
}
