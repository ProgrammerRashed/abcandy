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
  const rawData = getJsonData()
  const data = rawData.filter(singleData => singleData.tags.includes("feature"))[0]

  return (
    <div>
      <div className="px-4 md:px-6 lg:px-10">
        <NavigationBar />
      </div>

      <main>
        <div
        style={{ borderRadius: "0% 0% 48% 43% / 0% 0% 5% 6%", background: "radial-gradient(186.4% 69.29% at 15.9% 30.71%, #D1EFFF 0%, rgb(248,218,255) 100%)"}}
          className=" W-[1440px] h-[1070px]"
        >
          <Carousel />
        </div>

        {/* BLOGS SECTION */}
        <section className="container mx-auto mt-24 px-4 md:px-6 lg:px-10">
          {/* BLOG HEADER */}
          <BlogHeader />

          <div className="blogs grid lg:grid-cols-2 gap-10">
            <SpacialPost />
            <SpacialVideoPost />
          </div>

          {/* BLOG BANNER */}
          <BlogBanner />

          {/* FEATURED BLOG SECTION */}
          <div className="featured-section w-full flex flex-col lg:flex-row justify-between">
            <div className="lg:w-[70%] w-full">
              <BlogPost data={data}/>
            </div>
            <div className="w-full mt-5 lg:mt-0 lg:w-[25%] h-full">
              <FeatureCta />
            </div>
          </div>

          {/* ALL BLOGS */}
         <BlogContainer/>
        </section>

        {/* FOOTER SECTION */}
        <section className="bg-text-primary py-10 px-4 md:px-6 lg:px-10">
          <FooterComp />
        </section>
      </main>
    </div>
  );
}
