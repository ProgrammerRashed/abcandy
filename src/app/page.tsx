import BlogPost from "@/components/BlogPost";
import NavigationBar from "@/components/NavigationBar";
import BlogBanner from "@/components/BlogBanner";
import FeatureCta from "@/components/FeatureCta";

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
        </section>
      </main>
    </div>
  );
}
