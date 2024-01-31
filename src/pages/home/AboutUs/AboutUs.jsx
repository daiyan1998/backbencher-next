"use client";
import React from "react";
import CountUp from "react-countup";
const AboutUs = () => {
  return (
    <div className="lg:flex justify-between lg:gap-[130px] my-16 md:my-30">
      {/* ---------- About Us Header ---------- */}
      <div className="w-full lg:w-[570px] pb-6 lg:pb-0">
        <h1 className="about-h1">About Us</h1>
        <p className="about-para">
          At Backbenchers IT House, we are more than just a digital agency; we
          are architects of unique digital experiences. Our passion lies in
          crafting solutions that not only meet but exceed the ever-evolving
          expectations of the digital landscape.
        </p>
      </div>

      {/* ---------- About Us Stats ---------- */}
      <div className="stats-grid">
        <div>
          <h1 className="stats-h1">
            <CountUp
              key={1}
              start={143}
              end={329}
              duration={1}
              enableScrollSpy="true"
              suffix="+"
            ></CountUp>
          </h1>
          <p className="stats-para">Project Completed</p>
        </div>
        <div>
          <h1 className="stats-h1">
            <CountUp
              key={1}
              start={33}
              end={99}
              duration={1}
              enableScrollSpy="true"
              suffix="%"
            ></CountUp>
          </h1>
          <p className="stats-para">Satisfied Clients</p>
        </div>
        <div>
          <h1 className="stats-h1">
            <CountUp
              key={1}
              start={2900}
              end={6240}
              duration={0.5}
              enableScrollSpy="true"
              suffix="+"
            ></CountUp>
          </h1>
          <p className="stats-para">Hours of work</p>
        </div>
        <div>
          <h1 className="stats-h1">
            <CountUp
              key={1}
              start={0}
              end={5}
              duration={1}
              enableScrollSpy="true"
              suffix="+"
            ></CountUp>
          </h1>
          <p className="stats-para">Years Experience</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
