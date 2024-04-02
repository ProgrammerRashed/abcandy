
import { FaTwitter } from "react-icons/fa";
import { FaYoutube, FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
const FooterComp = () => {
  return (
    <div className="max-w-[1440px] mx-auto mt-20">

    {/* FOOTER SOCIAL */}
    <div className="footer-social flex flex-col justify-center items-center lg:block">
      <h3 className="text-3xl text-white">Connect with us</h3>
      <div className="icons flex gap-3 mt-3">
        <Link
          href=""
          className="border border-white/10 text-white/40 p-2 rounded-full text-lg"
        >
          <FaInstagram />
        </Link>
        <Link
          href=""
          className="border border-white/10 text-white/40 p-2 rounded-full text-lg"
        >
          <FaTwitter />
        </Link>
        <Link
          href=""
          className="border border-white/10 text-white/40 p-2 rounded-full text-lg"
        >
          <FaYoutube />
        </Link>

        <Link
          href=""
          className="border border-white/10 text-white/40 p-2 rounded-full text-lg"
        >
          <FaFacebook />
        </Link>
      </div>
    </div>

{/* FOOTER COPYRIGHT */}
<div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-20">
  <p className="text-white/60">&copy; 2023 ABCandy Bangladesh Ltd.</p>
  <ul className="flex gap-1 text-white">
    <li><Link href="" className="underline underline-offset-2">Terms of Use</Link></li>
    <li>&</li>
    <li><Link href="" className="underline underline-offset-2">Privacy Policy</Link></li>
  </ul>
</div>
  </div>
  )
}

export default FooterComp
