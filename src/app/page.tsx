import BlogPost from "@/components/BlogPost";
import NavigationBar from "@/components/NavigationBar";
import BlogBanner from "@/components/BlogBanner";
import FeatureCta from "@/components/FeatureCta";
import FooterComp from "@/components/FooterComp";
import BlogHeader from "@/components/BlogHeader";
export default function Home() {
  return (
    <div>
      <NavigationBar />

      <main>
        <div
          style={{ borderRadius: "25% 25% 25% 25% / 0% 0% 25% 25%" }}
          className="bg-gradient-to-br from-slate-50 via-slate-50 to-[#f9daff] h-[100vh]"
        ></div>

        {/* BLOGS SECTION */}
        <section className="max-w-[1290px] mx-auto my-20">
          {/* BLOG HEADER */}
          <BlogHeader/>

          <div className="blogs grid grid-cols-2 gap-10">
            <BlogPost />
            <BlogPost />
          </div>

          {/* BLOG BANNER */}
          <BlogBanner />

          {/* FEATURED BLOG SECTION */}
          <div className="featured-section w-full flex justify-between">
            <div className="w-[70%]">
              <BlogPost />
            </div>
            <div className="w-[25%] h-full">
              <FeatureCta />
            </div>
          </div>

          {/* ALL BLOGS */}
          <div>
            <div className="grid grid-cols-3 my-20 gap-10">
              <BlogPost />
              <BlogPost />
              <BlogPost />
            </div>

            {/* ALL BLOGS CTA */}
            <div className="text-center">
              <button className="border border-text-button text-text-button px-3 py-2">
                Load More
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER SECTION */}
        <section className="bg-text-primary py-10">
          <FooterComp />
        </section>
      </main>
    </div>
  );
}
