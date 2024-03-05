const FeatureCta = () => {
  return (

      <div
        className=" bg-white h-[550px] p-3"
        style={{
          backgroundImage: `url('https://i.ibb.co/kHTR1HM/feature-bg.jpg')`,
          backgroundBlendMode: "normal",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "whitesmoke",
        }}
      >
        <div className="bg-white p-3 space-y-3 relative -bottom-[75%]">
          <p className="text-lg text-text-primary uppercase">
            Do you need any creative service for your business?
          </p>
          <button className="px-3 py-2 bg-color-primary text-white">
            Let&apos;s Talk
          </button>
        </div>
      </div>
  );
};

export default FeatureCta;
