
const NavigationBar = () => {
  return (
    <nav className="bg-white py-6 text-text-primary">
        <div className="container max-w-[1290px] mx-auto flex justify-between items-center">
            <ul className="flex gap-5 items-center">
                <li>About Us</li>
                <li>Services</li>
                <li>What&apos;s New?</li>
            </ul>
            <div className="logo">
                <h1>ABCANDY</h1>
            </div>
            <ul className="flex gap-5 items-center">
                <li>Community</li>
                <li>Blog</li>
                <button className="">Contact Us</button>
            </ul>
        </div>
      
    </nav>
  )
}

export default NavigationBar
