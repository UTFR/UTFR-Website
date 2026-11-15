import React from "react";
import { Fade } from "react-awesome-reveal";
import GoToTop from "./GoToTop";
import Czech_2 from "../assets/HistoricCarPhotos/UT23/2023-Czech-2.jpeg";
import TeamMemberCard from "./TeamMemberCard";
import Alex_Zhang from "../assets/Headshots2027/Alex_Zhang.jpg";
import Amalia_Orsmond from "../assets/Headshots2027/Amalia_Orsmond.jpg";
import Andrea_Cao from "../assets/Headshots2027/Andrea_Cao.jpg";
import Andrei_Berzin from "../assets/Headshots2027/Andrei_Berzin.jpg";
import Andy_Lee from "../assets/Headshots2027/Andy_Lee.jpg";
import Avery_Lor from "../assets/Headshots2027/Avery_Lor.jpg";
import Emily_Wang from "../assets/Headshots2027/Emily_Wang.jpg";
import Eric_Chen from "../assets/Headshots2027/Eric_Chen.jpg";
import Eric_Lyu from "../assets/Headshots2027/Eric_Lyu.jpg";
import Harshpreet_Singh from "../assets/Headshots2027/Harshpreet_Singh.jpg";
import Jackson_Cai from "../assets/Headshots2027/Jackson_Cai.jpg";
import Jaden_Zhang from "../assets/Headshots2027/Jaden_Zhang.jpg";
import Jimmy_Ji from "../assets/Headshots2027/Jimmy_Ji.jpg";
import Juan_Moon from "../assets/Headshots2027/Juan_Moon.jpg";
import Justin_Lim from "../assets/Headshots2027/Justin_Lim.jpg";
import Kenn_McNeill from "../assets/Headshots2027/Kenn_McNeill.jpg";
import Luca_Betti from "../assets/Headshots2027/Luca_Betti.jpg";
import Luke_Hartford from "../assets/Headshots2027/Luke_Hartford.jpg";
import Mark_Saad from "../assets/Headshots2027/Mark_Saad.jpg";
import Nicholas_Burley from "../assets/Headshots2027/Nicholas_Burley.jpg";
import Robert_Firsov from "../assets/Headshots2027/Robert_Firsov.jpg";
import Rohan_Sadekar from "../assets/Headshots2027/Rohan_Sadekar.jpg";
import Ruodi_Yuan from "../assets/Headshots2027/Ruodi_Yuan.jpg";
import Sam_Dankner from "../assets/Headshots2027/Sam_Dankner.jpg";
import Sunny_Liu from "../assets/Headshots2027/Sunny_Liu.jpg";
import Tamara_Golijanin from "../assets/Headshots2027/Tamara_Golijanin.jpg";
import Vanessa_Ng from "../assets/Headshots2027/Vanessa_Ng.jpg";
import Winston_Young from "../assets/Headshots2027/Winston_Young.jpg";
import Yuya_Tokai from "../assets/Headshots2027/Yuya_Tokai.jpg";
import background_team from "../assets/HistoricCarPhotos/UT26/UT26_Team.jpg";

const prefix = "https://ik.imagekit.io/utfr/2025_2026/Headshots/";

const teamLeadership = [
  {
    name: "Nicholas Burley",
    imageUrl: Nicholas_Burley,
    linkedinUrl: "https://www.linkedin.com/in/nicholasburley/",
    title: "Team Captain",
    program: "ECE 2T6 + PEY",
  },
  {
    name: "Winston Young",
    imageUrl: Winston_Young,
    linkedinUrl: "https://www.linkedin.com/in/winston-young/",
    title: "Mechanical Technical Director",
    program: "Eng Sci 2T6 + PEY",
  },
  {
    name: "Rohan Sadekar",
    imageUrl: Rohan_Sadekar,
    linkedinUrl: "https://www.linkedin.com/in/rohan-sadekar-692a12260/",
    title: "Business Director",
    program: "Economics 2T8",
  },
  {
    name: "Robert Firsov",
    imageUrl: Robert_Firsov,
    linkedinUrl: "https://www.linkedin.com/in/robert-firsov/",
    title: "Electrical Technical Director",
    program: "ECE 2T6 + PEY",
  },
  {
    name: "Justin Lim",
    imageUrl: Justin_Lim,
    linkedinUrl: "https://www.linkedin.com/in/justin-bing-yi-lim/",
    title: "Driverless Technical Director",
    program: "Eng Sci 2T6 + PEY",
  },
  {
    name: "Tamara Golijanin",
    imageUrl: Tamara_Golijanin,
    linkedinUrl: "https://www.linkedin.com/in/tamara-golijanin/",
    title: "Chief Race Engineer",
    program: "Mech Eng 2T7",
  },
  {
    name: "Juan Moon",
    imageUrl: Juan_Moon,
    linkedinUrl: "https://www.linkedin.com/in/juan-moon/",
    title: "Shop Manager",
    program: "Mech Eng 2T7 + PEY",
  },
];

const mechLeads = [
  {
    name: "Tinah Yuan",
    imageUrl: Ruodi_Yuan,
    linkedinUrl: "https://www.linkedin.com/in/ruodiyuan/",
    title: "Vehicle Dynamics Lead",
    program: "Mech 2T9 + PEY",
  },
  {
    name: "Kenn McNeill",
    imageUrl: Kenn_McNeill,
    linkedinUrl: "https://www.linkedin.com/in/kenn-mcneill/",
    title: "Aerodynamics Lead",
    program: "Mech 2T7 + PEY",
  },
  {
    name: "Andrew Lee",
    imageUrl: Andy_Lee,
    linkedinUrl: "https://www.linkedin.com/in/andrewlee95/",
    title: "Chassis Lead",
    program: "Mech 2T8 + PEY",
  },
  {
    name: "Mark Saad",
    imageUrl: Mark_Saad,
    linkedinUrl: "www.linkedin.com/in/markzsaad/",
    title: "Accumulator Lead",
    program: "Mech 2T8 + PEY",
  },
  {
    name: "Amalia Orsmond",
    imageUrl: Amalia_Orsmond,
    linkedinUrl: "https://www.linkedin.com/in/aors",
    title: "Suspension Lead",
    program: "Mech 2T8 + PEY",
  },
  {
    name: "Andrea Cao",
    imageUrl: Andrea_Cao,
    linkedinUrl: "https://www.linkedin.com/in/andrea-yj-cao/",
    title: "Driver Interface Lead",
    program: "Mech 2T6 + PEY",
  },
  {
    name: "Jaden Zhang",
    imageUrl: Jaden_Zhang,
    linkedinUrl: "https://www.linkedin.com/in/jaden-zhang-588517322/",
    title: "Vehicle Controls Lead",
    program: "Mech 2T8 + PEY",
  },
  {
    name: "Luke Hartford",
    imageUrl: Luke_Hartford,
    linkedinUrl: "https://www.linkedin.com/in/lukehartford/",
    title: "Enclosures Lead",
    program: "Mech 2T8 + PEY",
  },
  {
    name: "Eric Chen",
    imageUrl: Eric_Chen,
    linkedinUrl: "https://www.linkedin.com/in/chen-eric-/",
    title: "Recruitment Lead",
    program: "Mech 2T6 + PEY",
  },
];

const elecLeads = [
  {
    name: "Avery Lor",
    imageUrl: Avery_Lor,
    linkedinUrl: "https://www.linkedin.com/in/averywlor/",
    title: "Firmware Lead",
    program: "ECE 2T8 + PEY",
  },
  {
    name: "Emily Wang",
    imageUrl: Emily_Wang,
    linkedinUrl: "https://www.linkedin.com/in/emilywang9875/",
    title: "LV Architecture Lead",
    program: "ECE 2T8 + PEY",
  },
  {
    name: "Sunny Liu",
    imageUrl: Sunny_Liu,
    linkedinUrl: "https://www.linkedin.com/in/sunnyyliu/",
    title: "Electronics Lead",
    program: "ECE 2T8 + PEY",
  },
  {
    name: "Eric Lyu",
    imageUrl: Eric_Lyu,
    linkedinUrl: "https://www.linkedin.com/in/eric-lyu-82a673290/",
    title: "Powertrain Lead",
    program: "ECE 2T8 + PEY",
  },
  {
    name: "Harshpreet Singh",
    imageUrl: Harshpreet_Singh,
    linkedinUrl: "https://www.linkedin.com/in/harshpreet-singh7/",
    title: "Recruitment Lead",
    program: "ECE 2T9 + PEY",
  },
];

const dvLeads = [
  {
    name: "Andrei Berzin",
    imageUrl: Andrei_Berzin,
    linkedinUrl: "https://www.linkedin.com/in/andrei-berzin/",
    title: "Planning Lead",
    program: "CS 2T9 + PEY",
  },
  {
    name: "Samuel Dankner",
    imageUrl: Sam_Dankner,
    linkedinUrl: "https://www.linkedin.com/in/samueldankner/",
    title: "Perception Lead",
    program: "Eng Sci 2T7 + PEY",
  },
  {
    name: "Alex Zhang",
    imageUrl: Alex_Zhang,
    linkedinUrl: "https://www.linkedin.com/in/alexzjm/",
    title: "Deep Perception Lead",
    program: "ECE 2T7 + PEY",
  },
  {
    name: "Jackson Cai",
    imageUrl: Jackson_Cai,
    linkedinUrl: "https://www.linkedin.com/in/jackson-cai",
    title: "Mapping Lead",
    program: "CE 2T8 + PEY",
  },
  {
    name: "Mark Pirner",
    imageUrl: prefix + "Mark_Pirner.jpg?updatedAt=1758335332573",
    linkedinUrl: "https://www.linkedin.com/in/markpirner/",
    title: "Recruitment Lead",
    program: "CE 2T7",
  },
];

const businessLeads = [
  {
    name: "Luca Betti",
    imageUrl: Luca_Betti,
    linkedinUrl: "www.linkedin.com/in/lucabetti828/",
    title: "External Relations",
    program: "Rotman 2T8",
  },
  {
    name: "Yuya Tokai",
    imageUrl: Yuya_Tokai,
    linkedinUrl: "https://www.linkedin.com/in/yuya-tokai/",
    title: "Graphic Design Lead",
    program: "Social Sciences 2T9",
  },
  {
    name: "Jimmy Ji",
    imageUrl: Jimmy_Ji,
    linkedinUrl: "http://www.linkedin.com/in/jimmy-ji-61649b303",
    title: "Events lead",
    program: "ECE 2T8 + PEY",
  },
  {
    name: "Vanessa Ng",
    imageUrl: Vanessa_Ng,
    linkedinUrl: "https://www.linkedin.com/in/vanessawyng/",
    title: "Recruiment Lead",
    program: "Rotman 2T9",
  },
];

const Team2025 = () => {
  return (
    <div className="w-full h-[100%] text-white bg-[#181818]">
      <div
        className="w-full h-screen relative"
        loading="style"
        style={{
          backgroundImage: `url(${background_team})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "35%",
        }}
      >
        <div className="h-full flex flex-col justify-end">
          <Fade delay={0.2} triggerOnce>
            <h1 className="font-bold text-8xl md:text-9xl text-white text-center md:text-left md:pl-10 md:mb-16 mb-40">
              2027 Team
            </h1>
          </Fade>
        </div>
      </div>
      <div>
        <div className="text-white flex flex-col justify-center items-center w-full bg-[#1D1D1D]">
          <div className="w-full about grid md:grid-cols-2">
            <div className="my-auto px-10 py-14">
              <Fade cascade delay={0.3} damping={0.3} triggerOnce>
                <p className="text-4xl font-bold inline border-b-4 border-[#ED3833] pr-1">
                  Our Team
                </p>
                <p className="pt-5">
                  The University of Toronto Formula Racing team is structured
                  into 4 operating departments: Electrical, Mechanical,
                  Driverless (DV) development, and Business. Each section
                  focuses on a specific aspect of the car/team. Within each of
                  these departments, there are several section leads, each in
                  charge of leading a team of junior & senior members. Our 4
                  racing drivers also all take active roles in the team’s
                  operation. There are over 70 members actively involved with
                  the team, working hard to deliver a faster and more reliable
                  car for the season ahead!
                </p>
              </Fade>
            </div>
            <div
              className=""
              style={{
                backgroundImage: `url(${Czech_2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* DIRECTORS */}
      <div>
        <Fade delay={0.2} triggerOnce>
          <p className="text-4xl font-bold flex justify-center py-8">
            Team Leadership
          </p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-auto px-3 pb-10">
          {teamLeadership.map((member, index) => (
            <Fade delay={0.2} triggerOnce>
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
                name={member.name}
                title={member.title}
                program={member.program}
              />
            </Fade>
          ))}
        </div>
      </div>

      <div>
        <Fade delay={0.2} triggerOnce>
          <p className="text-4xl font-bold flex justify-center pb-8">
            Mechanical Leads
          </p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-auto px-3 pb-10">
          {mechLeads.map((member, index) => (
            <Fade delay={0.2} triggerOnce>
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
                name={member.name}
                title={member.title}
                program={member.program}
              />
            </Fade>
          ))}
        </div>
      </div>

      <div>
        <Fade delay={0.2} triggerOnce>
          <p className="text-4xl font-bold flex justify-center pb-8">
            Electrical Leads
          </p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-auto px-3 pb-10">
          {elecLeads.map((member, index) => (
            <Fade delay={0.2} triggerOnce>
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
                name={member.name}
                title={member.title}
                program={member.program}
              />
            </Fade>
          ))}
        </div>
      </div>

      <div>
        <p className="text-4xl font-bold flex justify-center pb-8">
          Driverless Leads
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-auto px-3 pb-10">
          {dvLeads.map((member, index) => (
            <Fade delay={0.2} triggerOnce>
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
                name={member.name}
                title={member.title}
                program={member.program}
              />
            </Fade>
          ))}
        </div>
      </div>

      <div>
        <Fade delay={0.2} triggerOnce>
          <p className="text-4xl font-bold flex justify-center pb-8">
            Business Leads
          </p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-auto px-3 pb-10">
          {businessLeads.map((member, index) => (
            <Fade delay={0.2} triggerOnce>
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
                name={member.name}
                title={member.title}
                program={member.program}
              />
            </Fade>
          ))}
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Team2025;
