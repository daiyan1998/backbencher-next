"use client";
import expertise from "@/assets/whyUs/expertise.png";
import success from "@/assets/whyUs/success.png";
import client from "@/assets/whyUs/client.png";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const WhyUs = () => {
  return (
    <div className="whyUs-main-div">
      {/* ---------- Why Us Card ---------- */}
      <div className="lg:w-[544px] space-y-5">
        {/* ----- Unmatched Expertise Card ----- */}
        <Tilt
          className="parallax-effect-glare-scale card-tilt from-[#58BD7D]"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
        >
          <div className="whyUs-card">
            <Image
              className="w-6 md:w-9 h-6 md:h-9"
              src={expertise}
              alt="Unmatched Expertise icon"
            />
            <div>
              <h1 className="whyUs-card-h1">Unmatched Expertise</h1>
              <p className="whyUs-card-para">
                Our team of seasoned web developers, web designers, UI/UX
                designers, and digital marketing specialists possesses a wealth
                of knowledge and experience to transform your digital vision
                into reality.
              </p>
            </div>
          </div>
        </Tilt>
        {/* ----- Record Success Card ----- */}
        <Tilt
          className="parallax-effect-glare-scale card-tilt from-[#627EEA]"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
        >
          <div className="whyUs-card">
            <Image
              className="w-6 md:w-9 h-6 md:h-9"
              src={success}
              alt="Record Success icon"
            />
            <div>
              <h1 className="whyUs-card-h1">Record Success</h1>
              <p className="whyUs-card-para">
                We take pride in our history of delivering exceptional results
                for our clients, consistently exceeding their expectations and
                propelling their businesses to new heights.
              </p>
            </div>
          </div>
        </Tilt>
        {/* ----- Client Satisfaction Card ----- */}
        <Tilt
          className="parallax-effect-glare-scale card-tilt from-[#AF60ED]"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
        >
          <div className="whyUs-card">
            <Image
              className="w-6 md:w-9 h-6 md:h-9"
              src={client}
              alt="Client Satisfaction icon"
            />
            <div>
              <h1 className="whyUs-card-h1">Client Satisfaction</h1>
              <p className="whyUs-card-para">
                Your success is our utmost priority. We go the extra mile to
                ensure your project seamlessly aligns with your goals and
                exceeds your expectations, investing not just in your endeavors
                but in the enduring partnership.
              </p>
            </div>
          </div>
        </Tilt>
      </div>

      {/* ---------- Why Us Header ---------- */}
      <div className="lg:w-[570px] my-auto">
        <div className="space-y-4 md:space-y-6">
          <h1 className="whyUs-h1">
            Why <span className="text-skin-tertiary">Partner</span> with Us
          </h1>
          <p className="whyUs-para">
            we are a team of creative minds, tech enthusiasts, and strategic
            thinkers dedicated to transforming ideas into immersive digital
            realities. Our diverse backgrounds converge to form a dynamic
            collective that thrives on collaboration, innovation, and a shared
            commitment to excellence.
          </p>
          <p className="whyUs-para">
            Whether you are a startup looking to establish your online presence
            or an established enterprise seeking a digital transformation, we
            are here for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
