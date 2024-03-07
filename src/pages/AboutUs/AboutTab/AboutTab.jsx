"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import shibly from "@/assets/Tabpic/Untitled-11.png";
import emon from "@/assets/Tabpic/Untitled-4.png";
import ajharul from "@/assets/Tabpic/Untitled-13.png";
import washeef from "@/assets/Tabpic/Untitled-7.png";
import naimur from "@/assets/Tabpic/Untitled-8.png";
import sabbir from "@/assets/Tabpic/Untitled-15.png";
import amin from "@/assets/Tabpic/Untitled-14.png";
import khairul from "@/assets/Tabpic/Untitled-9.png";
import sayem from "@/assets/Tabpic/Untitled-1.png";
import moin from "@/assets/Tabpic/Untitled-12.png";
import daiyan from "@/assets/Tabpic/Untitled-6.png";
import siam from "@/assets/Tabpic/Untitled-16.png";
import mahir from "@/assets/Tabpic/Untitled-2.png";
import shanto from "@/assets/Tabpic/Untitled-20.jpg";
import jobayer from "@/assets/Tabpic/Untitled-18.png";
import shajalal from "@/assets/Tabpic/Untitled-19.png";
import mursalin from "@/assets/Tabpic/Untitled-3.png";
import reza from "@/assets/Tabpic/Untitled-10.png";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutTab = () => {
  const teamMembers = [
    {
      name: "Shibly Sadique",
      designation: "CEO",
      photoUrl: shibly,
      linkedin: "https://www.linkedin.com/in/shibly-sadique-398a0323b/",
    },
    {
      name: "Emon Ahmed",
      designation: "CFO",
      photoUrl: emon,
      linkedin: "https://www.linkedin.com/in/emon-ahmed-9b0746248",
    },
    {
      name: "Ajharul Islam Akanda",
      designation: "CTO",
      photoUrl: ajharul,
      linkedin: "http://linkedin.com/in/md-ajharul-islam-akanda-45ba94230",
    },
    {
      name: "Mohammad Washeef",
      designation: "Advisor",
      photoUrl: washeef,
      linkedin: "https://linkedin.com/in/mwiw",
    },
    {
      name: "Naimur Rahman",
      designation: "App Developer",
      photoUrl: naimur,
      linkedin: "linkedin.com/in/nr2001",
    },
    {
      name: "Md. Shabbir Khan",
      designation: "Sr. Web Designer",
      photoUrl: sabbir,
      linkedin: "",
    },
    {
      name: "Md Moinur Mahbub Al Amin",
      designation: "Sr. Web Developer",
      photoUrl: amin,
      linkedin: "https://www.linkedin.com/in/mdmmalamin/",
    },
    {
      name: "Md Shajalal Hossen",
      designation: "Lead Generation Specialist",
      photoUrl: shajalal,
      linkedin: "",
    },
    {
      name: "MD Moin Uddin",
      designation: "COO",
      photoUrl: moin,
      linkedin: "https://www.linkedin.com/in/moinuiux/",
    },
    {
      name: "Abdud Daiyan",
      designation: "Sr. Web Developer",
      photoUrl: daiyan,
      linkedin: "",
    },
    {
      name: "Mursalin Hossan",
      designation: "Sr. Web Designer",
      photoUrl: mursalin,
      linkedin: "",
    },
    {
      name: "Md. Mahir Hasan",
      designation: "Jr. App Developer",
      photoUrl: mahir,
      linkedin: "",
    },
    {
      name: "Md Jobayer Arafat",
      designation: "Jr. App Developer",
      photoUrl: jobayer,
      linkedin: "",
    },
    {
      name: "Jasim Uddin Santo",
      designation: "Jr. App Developer",
      photoUrl: shanto,
      linkedin: "",
    },
    {
      name: "Muhammad Sayem Ansàry",
      designation: "SEO Specialist",
      photoUrl: sayem,
      linkedin: "",
    },
    {
      name: "Md. Khairul Islam",
      designation: "Sr. Graphics Designer",
      photoUrl: khairul,
      linkedin: "",
    },
    {
      name: "Mahtab Siam",
      designation: "Jr. Graphics Designer",
      photoUrl: siam,
      linkedin: "",
    },
    {
      name: "Mowin Reza",
      designation: "Jr. Web Developer",
      photoUrl: reza,
      linkedin: "",
    },
  ];
  const FoundingMembers = teamMembers.filter(
    (member) =>
      member.designation === "CEO" ||
      member.designation === "CFO" ||
      member.designation === "CTO" ||
      member.designation === "Advisor" ||
      member.designation === "COO"
  );

  const appDeveloperMembers = teamMembers.filter(
    (member) =>
      member.designation === "App Developer" ||
      member.designation === "Jr. App Developer"
  );
  console.log(appDeveloperMembers.length);
  const webDeveloperMembers = teamMembers.filter(
    (member) =>
      member.designation === "Sr. Web Developer" ||
      member.designation === "Jr. Web Developer"
  );

  const digitalMarketingMembers = teamMembers.filter(
    (member) =>
      member.designation === "Lead Generation Specialist" ||
      member.designation === "SEO Specialist"
  );
  const webDesignerMembers = teamMembers.filter(
    (member) =>
      member.designation === "Sr. Web Designer" ||
      member.designation === "Jr. Web Designer"
  );
  const graphicDesignerMembers = teamMembers.filter(
    (member) =>
      member.designation === "Sr. Graphics Designer" ||
      member.designation === "Jr. Graphics Designer"
  );

  const [activeTab, setActiveTab] = useState("FoundingMembers");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const tabItem = [
    {
      title: "Founding Members",
      value: "FoundingMembers",
    },
    {
      title: "Web Development",
      value: "WebDevelopment",
    },
    {
      title: "App Development",
      value: "AppDevelopment",
    },
    {
      title: "Digital Marketing",
      value: "DigitalMarketing",
    },
    {
      title: "Web Design",
      value: "webDesign",
    },
    {
      title: "Graphic Design",
      value: "GraphicDesign",
    },
  ];

  return (
    <div className="my-20">
      <Tabs id="custom-animation" value={activeTab}>
        <TabsHeader className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2 px-1 bg-transparent">
          {/* ... existing tabs ... */}
          {tabItem.map((ti) => (
            <Tab
              className={`py-2 px-2 border-primary border-2 mx-1 rounded-lg focus:outline-none transition duration-300 ease-in-out transform hover:scale-95 hover:bg-primary/80 hover:text-white ${
                activeTab === ti.value ? "bg-primary text-black hover:text-black" : ""
              }`}
              onClick={() => handleTabChange(ti.value)}
              value={ti.value}
              key={ti.value}
            >
              {ti.title}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {/* ... existing TabPanel sections ... */}
          <TabPanel
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-5"
            value="FoundingMembers"
          >
            {FoundingMembers.map(
              ({ name, photoUrl, linkedin, designation }) => (
                <div key={name} className="container">
                  <div className="bgBlur">
                    <div className="card">
                      <div className="content">
                        <div className="imgBox">
                          <Image src={photoUrl} alt={`${designation} image`} className="img" />
                        </div>
                        <div className="contentBox text-center mt-2.5 text-xl text-darkBlue font-semibold">
                          <h3>{name} <br /><span className="text-lg text-silver font-medium">{designation}</span></h3>
                        </div>
                      </div>
                      <ul className="social">
                        <li className="list01">
                          <Link href={linkedin} target="_blank"><FaLinkedinIn className=" border text-[#0092cc] border-opacity-30 rounded-md border-gray-400 p-2 box-content" /></Link>
                        </li>
                        {/* <li className="list02">
                        <Link href={linkedin}><Image src={Linkedin} alt="{name} linkedin profile" /></Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            )}
          </TabPanel>
          <TabPanel
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-5"
            value="WebDevelopment"
          >
            {webDeveloperMembers.map(
              ({ name, photoUrl, linkedin, designation }) => (
                <div key={name} className="container">
                  <div className="bgBlur">
                    <div className="card">
                      <div className="content">
                        <div className="imgBox">
                          <Image src={photoUrl} alt={`${designation} image`} className="img" />
                        </div>
                        <div className="contentBox text-center mt-2.5 text-xl text-darkBlue font-semibold">
                          <h3>{name} <br /><span className="text-lg text-silver font-medium">{designation}</span></h3>
                        </div>
                      </div>
                      <ul className="social">
                        <li className="list01">
                          {linkedin === "" ? (
                            ""
                          ) : (
                            <Link href={linkedin} target="_blank">
                                <FaLinkedinIn className=" border text-[#0092cc] border-opacity-30 rounded-md border-gray-400 p-2 box-content" /></Link>
                          )}
                        </li>
                        {/* <li className="list02">
                        <Link href={linkedin}><Image src={Linkedin} alt="{name} linkedin profile" /></Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            )}
          </TabPanel>
          <TabPanel
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-5"
            value="AppDevelopment"
          >
            {appDeveloperMembers.map(
              ({ name, photoUrl, linkedin, designation }) => (
                <div key={name} className="container">
                  <div className="bgBlur">
                    <div className="card">
                      <div className="content">
                        <div className="imgBox">
                          <Image src={photoUrl} alt={`${designation} image`} className="img" />
                        </div>
                        <div className="contentBox text-center mt-2.5 text-xl text-darkBlue font-semibold">
                          <h3>{name} <br /><span className="text-lg text-silver font-medium">{designation}</span></h3>
                        </div>
                      </div>
                      <ul className="social">
                        <li className="list01">
                          {linkedin === "" ? (
                            ""
                          ) : (
                            <Link href={linkedin} target="_blank">
                                <FaLinkedinIn className=" border text-[#0092cc] border-opacity-30 rounded-md border-gray-400 p-2 box-content" /></Link>
                          )}
                        </li>
                        {/* <li className="list02">
                        <Link href={linkedin}><Image src={Linkedin} alt="{name} linkedin profile" /></Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            )}
          </TabPanel>
          <TabPanel
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-5"
            value="DigitalMarketing"
          >
            {digitalMarketingMembers.map(
              ({ name, photoUrl, linkedin, designation }) => (
                <div key={name} className="container">
                  <div className="bgBlur">
                    <div className="card">
                      <div className="content">
                        <div className="imgBox">
                          <Image src={photoUrl} alt={`${designation} image`} className="img" />
                        </div>
                        <div className="contentBox text-center mt-2.5 text-xl text-darkBlue font-semibold">
                          <h3>{name} <br /><span className="text-lg text-silver font-medium">{designation}</span></h3>
                        </div>
                      </div>
                      <ul className="social">
                        <li className="list01">
                          {linkedin === "" ? (
                            ""
                          ) : (
                            <Link href={linkedin} target="_blank">
                                <FaLinkedinIn className=" border text-[#0092cc] border-opacity-30 rounded-md border-gray-400 p-2 box-content" /></Link>
                          )}
                        </li>
                        {/* <li className="list02">
                        <Link href={linkedin}><Image src={Linkedin} alt="{name} linkedin profile" /></Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            )}
          </TabPanel>
          <TabPanel
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-5"
            value="webDesign"
          >
            {webDesignerMembers.map(
              ({ name, photoUrl, linkedin, designation }) => (
                <div key={name} className="container">
                  <div className="bgBlur">
                    <div className="card">
                      <div className="content">
                        <div className="imgBox">
                          <Image src={photoUrl} alt={`${designation} image`} className="img" />
                        </div>
                        <div className="contentBox text-center mt-2.5 text-xl text-darkBlue font-semibold">
                          <h3>{name} <br /><span className="text-lg text-silver font-medium">{designation}</span></h3>
                        </div>
                      </div>
                      <ul className="social">
                        <li className="list01">
                          {linkedin === "" ? (
                            ""
                          ) : (
                            <Link href={linkedin} target="_blank">
                                <FaLinkedinIn className=" border text-[#0092cc] border-opacity-30 rounded-md border-gray-400 p-2 box-content" /></Link>
                          )}
                        </li>
                        {/* <li className="list02">
                        <Link href={linkedin}><Image src={Linkedin} alt="{name} linkedin profile" /></Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            )}
          </TabPanel>
          <TabPanel
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-5"
            value="GraphicDesign"
          >
            {graphicDesignerMembers.map(
              ({ name, photoUrl, linkedin, designation }) => (
                <div key={name} className="container">
                  <div className="bgBlur">
                    <div className="card">
                      <div className="content">
                        <div className="imgBox">
                          <Image src={photoUrl} alt={`${designation} image`} className="img" />
                        </div>
                        <div className="contentBox text-center mt-2.5 text-xl text-darkBlue font-semibold">
                          <h3>{name} <br /><span className="text-lg text-silver font-medium">{designation}</span></h3>
                        </div>
                      </div>
                      <ul className="social">
                        <li className="list01">
                          {linkedin === "" ? (
                            ""
                          ) : (
                            <Link href={linkedin} target="_blank">
                                <FaLinkedinIn className=" border text-[#0092cc] border-opacity-30 rounded-md border-gray-400 p-2 box-content" /></Link>
                          )}
                        </li>
                        {/* <li className="list02">
                        <Link href={linkedin}><Image src={Linkedin} alt="{name} linkedin profile" /></Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            )}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default AboutTab;
