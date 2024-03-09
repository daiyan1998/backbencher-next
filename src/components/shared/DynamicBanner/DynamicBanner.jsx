const DynamicBanner = ({ content }) => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:my-[100px] my-9 px-0 lg:gap-7">
      <div className="md:basis-1/2 leading-loose">{content?.title}</div>

      <div className="md:basis-1/2 text-[#000000b3]">{content?.subPara}</div>
    </div>
  );
};

export default DynamicBanner;
