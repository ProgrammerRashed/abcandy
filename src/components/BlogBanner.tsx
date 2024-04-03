"use client"
import React from "react"
import Modal from "./Modal"
import ContactUs from "./ContactUs"

const BlogBanner = () => {
  const [isShowModal, setIsShowModal] = React.useState(false) 

  const onClose = () => {
      setIsShowModal(false)
  }
  return (
    <div className="h-[430]">
        <div className="bg-[#20172d] py-10 lg:py-24 my-12" style={{backgroundImage: `url('https://i.ibb.co/17HtQ73/blog-banner-bg.jpg')`, backgroundBlendMode: "color-dodge", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="content p-6 lg:p-12 bg-white/10 backdrop-blur-lg w-[80%] lg:-[280px] lg:w-[850px] mx-auto text-center space-y-5">
              <h1 className="text-white text-4xl font-medium">Creative team, intuitive solution</h1>
              <p className="text-white/80 text-base">
                Lorem ipsum dolor sit amet consectetur. Enim vitae hendrerit
                consectetur cras in nulla. Non suspendisse at ac enim. Facilisi
                nulla tortor nec mollis faucibus odio sodales.
              </p>
              <button className="bg-white py-3 px-8 font-medium text-base" onClick={()=>{
                    setIsShowModal(true)
                }}>Let&apos;s Talk</button>
            </div>
          </div>
          <Modal isShowModal={isShowModal} onClose={onClose}  modalTitle="Contact Us">
        <ContactUs/>
      </Modal>
    </div>
  )
}

export default BlogBanner
