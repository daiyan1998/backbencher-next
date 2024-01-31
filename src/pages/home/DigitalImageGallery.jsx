import Image from "next/image";
import Rectangle3978 from "@/assets/imageGallery/Rectangle 3978.png";
import Rectangle3979 from "@/assets/imageGallery/Rectangle 3979.png";
import Rectangle3980 from "@/assets/imageGallery/Rectangle 3980.png";
import Rectangle3981 from "@/assets/imageGallery/Rectangle 3981.png";

const DigitalImageGallery = () => {
  return (
    <div className="relative ">
      <h3 className="title-style-primary md:mb-[60px] mb-4 text-center">
        Transforming Businesses <br /> through Digital Excellence
      </h3>
      <div className=" mx-auto h-2/3  grid grid-cols-2 grid-rows-5 gap-4">
        <div className="row-span-3 rounded-lg">
          <Image
            className="object-cover w-full h-full"
            alt="Gallary Image"
            src={Rectangle3981}
            height={500}
            width={500}
          />
        </div>
        <div className="row-span-2 col-start-1 row-start-4 rounded-lg">
          <Image
            className="object-cover w-full h-full"
            alt="Gallary Image"
            src={Rectangle3979}
            height={500}
            width={500}
          />
        </div>
        <div className="row-span-2 col-start-2 row-start-1 rounded-lg">
          <Image
            className="object-cover w-full h-full"
            alt="Gallary Image"
            src={Rectangle3978}
            height={500}
            width={500}
          />
        </div>
        <div className="row-span-3 col-start-2 row-start-3 rounded-lg">
          <Image
            className="object-cover w-full h-full"
            alt="Gallary Image"
            src={Rectangle3980}
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalImageGallery;
