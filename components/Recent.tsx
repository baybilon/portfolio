"use client";
import { cgi, gallery, projectContent, projects, tabItems } from "@/data";
import React, { useEffect, useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import ProjectModal from "./ui/ProjectModal";
import { time } from "console";
import { title } from "process";
import { link } from "fs";
import { motion, AnimatePresence, delay } from "framer-motion";
import { GiHidden } from "react-icons/gi";
import { Content } from "next/font/google";
import Image from "next/image";

interface projectsProps {
  id?: number;
  title?: string;
  des?: string;
  img?: string[];
  iconLists?: any[];
  link?: string;
  desL?: string;
  tag?: string[];
}

const Recent = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [activeModal, setActiveModal] = useState<projectsProps | undefined>();
  const [toggleState, setToggleState] = useState(1);
  // const [activeProject, setActiveProject] = useState(null)

  // const handleDetail = (projectId) => {
  //   const project = projects.find(p => p.id === projectId);
  //   setActiveProject(project);
  // }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // const handleCloseModal = () => {
  //   setActiveProject(null)
  // }

  // console.log('activeModal',activeModal)

  useEffect(() => {
    if (!activeModal) return;
    dialogRef.current?.showModal();
    // document.body.style.overflow = 'hidden'
    dialogRef.current?.addEventListener("close", closeModal);

    return () => {
      dialogRef.current?.removeEventListener("close", closeModal);
    };
  }, [activeModal]);

  function closeModal() {
    dialogRef.current?.close();
    setActiveModal(undefined);
    // document.body.style.overflow = ''
  }

  const motionModal = {
    hidden: {
      y: "-10vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transiiton: { duration: 1 },
    },
  };

  const motionTab = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transiiton: { duration: 1 },
    },
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        className="fixed h-full w-full flex justify-center items-center dark:bg-neutral-950 bg-neutral-50 backdrop:backdrop-blur backdrop:backdrop-brightness-[25%] rounded-lg border border-neutral-800 overflow-scroll overscroll-none"
        // variants = {motionModal}
        // initial = "hidden"
        // animate = "visible"
        // exit = "hidden"
      >
        <div className="top-0 right-16 absolute">
          <button className="fixed p-5 border" onClick={closeModal}>
            <FaXmark className="h-8 w-8 " />
          </button>
        </div>

        {activeModal && (
          <motion.div
            className="flex relative lg:py-20 py-10 h-full"
            variants={motionModal}
            initial="hidden"
            animate="visible"
            // exit="hidden"
          >
            <div className="grid grid-flow-row grid-cols-2 gap-8 lg:w-[60vw] w-[80vw] h-full pb-96">
              <div className="col-span-2 ">
                <h1 className="font-bold lg:text-4xl md:text-xl text-base">
                  {activeModal.title}
                </h1>
              </div>
              <div className="col-span-2 ">
                <p className="lg:text-xl lg:font-normal font-light text-sm">
                  {activeModal.des}
                </p>
              </div>
              <div className="col-span-2 lg:w-10/12 w-full">
                <p className="lg:text-xl lg:font-normal font-light text-sm ">
                  {activeModal.desL}
                </p>
              </div>
              <div className="lg:col-span-1 col-span-2">
                <div className="flex lg:flex-none flex-wrap lg:gap-3 gap-2">
                  {/* {activeModal.tag.map((tag, index) => ( 
                  <div key={index} className='border dark:border-neutral-800 border-neutral-300 rounded-lg dark:bg-neutral-950 bg-neutral-100 w-auto lg:h-10 h-8 md:mb-2 flex justify-center items-center'>
                    <p className='px-3 text-xs lg:text-base lg:font-normal'>
                      {tag}
                    </p>
                  </div>
                ))} */}
                  {(() => {
                    const tags = new Array();
                    activeModal.tag?.forEach((tagnya, index) => {
                      tags.push(
                        <div
                          key={index}
                          className="border dark:border-neutral-800 border-neutral-300 rounded-lg dark:bg-neutral-950 bg-neutral-100 w-auto lg:h-10 h-8 md:mb-2 flex justify-center items-center"
                        >
                          <p className="px-3 text-xs lg:text-base lg:font-normal">
                            <span className="project-icon">{tagnya}</span>
                          </p>
                        </div>
                      );
                    });
                    return tags;
                  })()}

                  {/* {(() => {
                  const tags = [];
                  for (let i = 0; i < activeModal.tag?.length; i++){
                    tags.push(
                      <div className='border dark:border-neutral-800 border-neutral-300 rounded-lg dark:bg-neutral-950 bg-neutral-100 w-auto lg:h-10 h-8 md:mb-2 flex justify-center items-center'>
                        <p className='px-3 text-xs lg:text-base lg:font-normal'>
                          <span key={i} className="project-icon">
                            {activeModal.tag[i]}
                          </span>
                        </p>
                      </div>
                    );
                  }
                  return tags;
                })()} */}
                </div>
              </div>
              <div className="col-span-2 pb-20">
                <div className="items-center grid grid-cols-1 lg:gap-10 gap-6">
                  {/* {activeModal.img.map((img, index) => (
                  <div key={index} className='border dark:border-neutral-800 border-neutral-300 rounded-lg'>
                      <img src={img} alt='img' className='object-contain object-center w-full h-full p-5'></img>
                  </div>
                ))} */}
                  {(() => {
                    const imgs = new Array();
                    activeModal.img?.forEach((imgnya, index) => {
                      imgs.push(
                        <div
                          key={index}
                          className="border dark:border-neutral-800 border-neutral-300 rounded-lg"
                        >
                          <Image
                            src={imgnya}
                            alt={"Project"}
                            width={500}
                            height={500}
                            className="object-center w-full h-full p-5"
                          />
                        </div>
                      );
                    });
                    return imgs;
                  })()}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </dialog>

      <div className="w-full py-20 mt-10" id="projects">
        <h1 className="heading">
          A small fraction of my {""}
          <span className="text-pelorous-400">Recent Projects</span>
        </h1>

        <div className="">
          <div
            className="flex flex-wrap justify-center gap-4 py-8 mt-12"
            id="projectTabs"
          >
            {tabItems.map((tabItem) => (
              <button
                key={tabItem.id}
                className={`lg:h-12 h-10 w-auto lg:px-5 px-3 lg:text-base text-sm border bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 border-neutral-200 dark:hover:border-neutral-700 hover:border-neutral-400 transition duration-200 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
              ${
                toggleState === tabItem.id
                  ? "dark:focus:border-neutral-700 focus:border-neutral-400"
                  : ""
              }`}
                onClick={() => toggleTab(tabItem.id)}
              >
                {tabItem.name}
              </button>
            ))}
          </div>
        </div>

        <div className={`${toggleState != 1 ? "hidden" : "container"}`}>
          <motion.div
            className="relative items-center w-full lg:px-5 lg:py-6 mx-auto"
            key={toggleState}
            variants={motionTab}
            initial="hidden"
            animate="visible"
          >
            <div className="grid w-full grid-cols-1 gap-10 m-auto lg:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="lg:p-8 p-5  dark:bg-neutral-900 bg-neutral-200  rounded-lg transform hover:scale-105 transition duration-200"
                >
                  <div className="bg-neutral-900 rounded-lg border dark:border-neutral-800 mb-10">
                    <Image
                      src={project.img[0]}
                      alt={"Project"}
                      width={500}
                      height={500}
                      className="object-contain object-center md:object-cover w-full lg:h-full md:h-1/4 rounded-xl"
                    />
                  </div>
                  <h1 className="mx-auto font-bold lg:text2xl md:text-xl text-base line-clamp-1">
                    {project.title}
                  </h1>
                  <p className="mx-auto lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                    {project.des}
                  </p>
                  {/* <div className="mt-4">
                <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-200 lg:mb-0 hover:text-blue-100" title="read more"> Read More » </a>
              </div> */}
                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {project.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border dark:border-neutral-800 rounded-full dark:bg-neutral-950 bg-neutral-300 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        type="button"
                        onClick={() => setActiveModal(project)}
                      >
                        {/* <button type='button' onClick={() => handleDetail(project.id)}> */}
                        <p className="flex lg:text-xl sm:text-xs text-sm blue-100">
                          {" "}
                          More Info
                        </p>
                      </button>
                      <FaLocationArrow className="ms-3" color="#30B2CF" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          {/* <ProjectModal project={activeProject} onClose={handleCloseModal}/> */}
        </div>

        <div className={`${toggleState != 2 ? "hidden" : "container"}`}>
          <motion.div
            className="relative items-center w-full py-12 lg:px-5 "
            key={toggleState}
            variants={motionTab}
            initial="hidden"
            animate="visible"
          >
            <div className="grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-20">
              {projectContent.map((content) => (
                <div key={content.id}>
                  <div className="lg:w-auto lg:h-auto border border-neutral-800 rounded-lg">
                    <iframe
                      className="w-full aspect-video rounded-lg"
                      src={content.link}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className={`${toggleState != 3 ? "hidden" : "container"}`}>
          <motion.div
            key={toggleState}
            variants={motionTab}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col my-10 gap-4">
              <p className="text-xl lg:text-4xl leading-snug tracking-wide ">
                Photography
              </p>
              <p className="lg:w-[60%] text-base leading-snug tracking-wide ">
                I’m very passioante about photograpy i take a picture of people
                sometime pets. My goals is to capture a moment that people
                rarely show in the real word. My recent focus has been on
                photographing In - game capture and people of interest
              </p>
            </div>
            <div className="columns-xs gap-x-8 gap-y-4">
              {gallery.map((galleryPic: any, index: number) => (
                <div key={index} className="grid gap-x-8 gap-y-4 mb-8">
                  <Image
                    src={galleryPic.src}
                    alt={"Photo"}
                    width={500}
                    height={500}
                    className="rounded-lg dark:border border-neutral-800 aspect-autobord"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className={`${toggleState != 4 ? "hidden" : "container"}`}>
          <motion.div
            className="lg:py-10"
            key={toggleState}
            variants={motionTab}
            initial="hidden"
            animate="visible"
          >
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:grid-rows-3 md:grid-flow-row md:grid-cols-1 gap-8">
              <div className="text-left flex flex-col lg:col-span-2 lg:row-span-1 gap-4 my-auto">
                <div className="text-xl lg:text-4xl leading-snug tracking-wide ">
                  3D Scene
                </div>
                <p className="">
                  Some 3D scene that i made from blender, with some other work
                  flow to design and simulate the clothes in Marvelous Design.
                </p>
                Rose lady are inspired in Covid-19 era to represent awareness to
                wear mask during pandemic, the rose are the symbol to attend
                their funeral.
                <p>
                  The forest protector forbid human entering thier forest, 3D
                  scene that made inspired by Whitechapel - Doomwood music
                  video.
                </p>
              </div>
              {cgi.map((cgiImg, index: number) => (
                <div key={index} className={` ${cgiImg.classname}`}>
                  <Image
                    src={cgiImg.src}
                    alt={"CGI"}
                    width={500}
                    height={500}
                    className="border border-neutral-800 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Recent;
