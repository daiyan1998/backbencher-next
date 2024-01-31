import ceoImage from "@/assets/Tabpic/Untitled-11.png";
import Image from "next/image";
const CeoWord = () => {
  return (
    <div className=" lg:flex gap-5 mb-24">
      <div className="lg:w-1/3 lg:h-[550px]">
        <Image className="" src={ceoImage} alt="" />
      </div>
      <div className="lg:w-1/2 space-y-5 py-16">
        <h1 className="lg:text-5xl text-3xl  font-semibold">CEO’s Word</h1>
        <p className="lg:text-2xl text-xl text-skin-tertiary font-semibold">
          &quot;Think different, code different, dominate differently.&quot;
        </p>
        <p className="text-[#000000b3]">
          This ethos encapsulates the company&apos;s unwavering commitment to
          marrying creative expression with tangible success. Backbenchers
          thrives not just on crafting visually stunning work but on delivering
          results that stand the test of time. Their transformative capabilities
          extend beyond projects; they have the power to shape enduring
          legacies. Backbenchers - where creativity meets lasting impact.
        </p>
      </div>
    </div>
  );
};

export default CeoWord;
