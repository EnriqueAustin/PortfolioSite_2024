import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaVuejs,
  FaPython,
  FaNodeJs,
  FaGit,
  FaGitlab,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiNodedotjs,
  SiExpress,
  SiCsharp,
  SiCplusplus,
  SiMysql,
  SiSolidity,
  SiFlutter,
  SiDart,
  SiGithub,
  SiSanity,
  SiElasticsearch,
  SiMongodb,
  SiMariadb,
  SiDocker,
  SiKubernetes,
  SiSwarm,
  SiPowershell,
  SiShell,
  SiGnubash,
  SiTailwindcss,
  SiSass,
  SiApachecordova,
} from "react-icons/si";

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-end",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <FaVuejs key="vue" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "Back-end",
        icons: [
          <FaJs key="js" />,
          <FaNodeJs key="node" />,
          <SiExpress key="express" />,
          <FaPython key="python" />,
          <SiCsharp key="csharp" />,
          <SiCplusplus key="cplusplus" />,
          <SiElasticsearch key="elasticsearch" />,
        ],
      },
      {
        title: "Mobile",
        icons: [
          <FaJs key="js" />,
          <FaNodeJs key="node" />,
          <SiFlutter key="flutter" />,
          <SiDart key="dart" />,
          <SiApachecordova key="cordova" />,
        ],
      },
      {
        title: "Blockchain",
        icons: [<SiSolidity key="solidity" />],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          // <SiAdobephotoshop key="photoshop" />
        ],
      },
      {
        title: "Styling Systems",
        icons: [<FaCss3 key="css3" />, <SiTailwindcss key="tailwind" />, <SiSass key="sass" />],
      },
      // {
      //   title: "Version Control",
      //   icons: [
      //     <FaGit key="git" />,
      //     <SiGithub key="github" />,
      //     <FaGitlab key="gitlab" />
      //   ],
      // },
      {
        title: "Content Management Systems",
        icons: [<FaWordpress key="wordpress" />, <SiSanity key="sanity" />],
      },
      // {
      //   title: "Databases",
      //   icons: [
      //     <SiElasticsearch key="elasticsearch" />,
      //     <SiMongodb key="mongodb" />,
      //     <SiMariadb key="mariadb" />
      //   ],
      // },
      {
        title: "Containerization",
        icons: [<SiDocker key="docker" />, <SiKubernetes key="kubernetes" />, <SiSwarm key="swarm" />],
      },
      {
        title: "Automation and Scripting",
        icons: [<SiPowershell key="powershell" />, <SiGnubash key="bash" />],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  {
    title: "experience",
    info: [
      {
        title:
          "Dev/Ops & Full-Stack Software Engineer - Sintrex Integration Services (Pty) Ltd, Bellville",
        stage: "2023 - 2024",
      },
      {
        title:
          "NOC Operator/Network Monitoring - Sintrex Integration Services (Pty) Ltd, Bellville",
        stage: "2022 - 2022",
      },
      {
        title: "Network & Wireless Technician - Rapid Networks, Vredenburg",
        stage: "2022 - 2022",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "Docker Mastery: With Kubernetes +Swarm - Docker Captain Program",
        stage: "2024",
      },
      {
        title:
          "Higher Certificate (Systems Development)  - Mobile Application Development - IT Varsity",
        stage: "2022",
      },
      {
        title:
          "Software Development - Pearson Institute, Cape Town, Durbanville",
        stage: "2020",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Years ago I began freelancing as a developer. Since then, I&apos;ve done
            remote work for agencies, consulting and collaborated on digital
            products for business and consumer use and currently employed as a
            Dev/Ops & Full-Stack software engineer.
          </motion.p>
          {/* counters */}
          <motion.div
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={22} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
              {/* awards / optional section */}
              {/* <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Awards won
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mv-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIcons) => {
                      return (
                        <div key={itemIcons} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
