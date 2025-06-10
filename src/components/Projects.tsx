import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa"
import { FaDiamond } from "react-icons/fa6"
import uatanks from "../resources/uatanks-2.png"
import lavaEscape1 from "../resources/lavaescape-1.png"
import lavaEscape2 from "../resources/lavaescape-2.png"
import juggling from "../resources/soccer-1.jpg"
import thief from "../resources/thief-1.png"
import { MdClose } from "react-icons/md"

const Projects = () => {

    const [ showPanel, setShowPanel ] = useState(false)
    const [ currentProjectIndex, setCurrentProjectIndex ] = useState(0)
    const projects: 
    { 
        id: number,
        github: string,
        name: string,
        isMobile: boolean,
        imageOne: string,
        imageTwo: string,
        tools: string[],
        bulletPoints: string[]
    }[] = [
        {
            id: 0,
            github: "https://github.com/ASweet10/Games/tree/main/AI-Tanks",
            name: "AI Tanks",
            isMobile: false,
            imageOne: uatanks,
            imageTwo: uatanks,
            tools: [
                "Unity",
                "C#",
            ],
            bulletPoints: [
                "Tank arena survival",
                "Finite State Machine AI",
                "Procedural map generation",
                "AI flees to heal when low HP; Prioritizes powerups",
            ]
        },
        {
            id: 1,
            github: "https://github.com/ASweet10/Games",
            name: "Horror Game WIP",
            isMobile: false,
            imageOne: thief,
            imageTwo: thief,
            tools: [
                "Unity",
                "C#",
            ],
            bulletPoints: [
                "Game Programming and Game Design classes",
                "Code Architecture, AI Basics, Engines in 2D and 3D",
            ]
        },
        {
            id: 2,
            github: "https://github.com/ASweet10/Games/tree/main/Demo-BehaviorTree",
            name: "Behavior Tree Demo",
            isMobile: false,
            imageOne: thief,
            imageTwo: thief,
            tools: [
                "Unity",
                "C#",
            ],
            bulletPoints: [
                "",
                "",
            ]
        },
        {
            id: 3,
            github: "https://github.com/ASweet10/Games/tree/main/BackyardJuggling",
            name: "Backyard Juggling",
            isMobile: true,
            imageOne: juggling,
            imageTwo: juggling,
            tools: [
                "Unity",
                "C#",
            ],
            bulletPoints: [
                "Mobile development testing with Android Studio",
                "Saving/Loading, file permission considerations",
                "Optimizing assets for all resolutions",
            ]
        },
        {
            id: 4,
            github: "",
            name: "Lava Escape",
            isMobile: false,
            imageOne: thief,
            imageTwo: thief,
            tools: [
                "Unreal",
                "Blueprints"
            ],
            bulletPoints: [
                "First-Person Puzzle Platformer",
                "Change active elements with hotkeys",
                "Lava floor constantly rises",
            ]
        },
        {
            id: 5,
            github: "https://github.com/ASweet10/Games/tree/main/WeeklyJam235_Bandit",
            name: "Thief in the Night",
            isMobile: false,
            imageOne: thief,
            imageTwo: thief,
            tools: [
                "Unity",
                "C#",
            ],
            bulletPoints: [
                "Weekly Jam 235: Bandit",
                "Enemies steal treasure and run for exits",
                "Run and grab thrown knives from enemies or walls"
            ]
        },
    ]

  return (
    <section className='w-full h-full pt-48'>
        <div className={`${showPanel ? "opacity-40" : "opacity-100"}`}>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center mx-8 md:mx-64'>
                { projects.map((project) => {
                    return (
                        <div key={project.id} className='max-w-[450px]'>
                            <img src={project.imageOne} alt="" onClick={() => {setShowPanel(true); setCurrentProjectIndex(project.id)}}
                                className='hover:scale-105 transition-all duration-200 rounded-lg hover:cursor-pointer min-h-60 min-w-96' 
                            />
                        </div>
                    )
                })}
            </div>
        </div>

        {/* Full-screen panel */}
        { showPanel && (
            <div className='fixed top-2 left-1/4 h-[100vh] w-[50vw] bg-blue-950 rounded-lg justify-center overflow-auto pb-10'>
                <MdClose onClick={() => setShowPanel(false)} className='text-white hover:text-red-600 hover:cursor-pointer text-5xl absolute top-5 right-5'/>

                <div className='flex flex-col'>
                    <div className='flex flex-row justify-center items-center gap-4 pt-12 pb-4'>
                    <h1 className='text-4xl text-white text-center font-bold'>{projects[currentProjectIndex].name}</h1>

                    <div className='text-center flex flex-row justify-center items-center gap-2'>
                        <p className='text-white text-4xl'>(</p>
                        { projects[currentProjectIndex].tools.map((tool, i) => {
                            return (
                                <p key={i} className='text-white text-4xl font-medium'>
                                    {tool}
                                    {i !== projects[currentProjectIndex].tools.length - 1 && ", "}
                                </p>
                            )
                        })}
                        <p className='text-white text-4xl'>)</p>
                    </div>
                </div>
                    <a target="_blank" href={projects[currentProjectIndex].github} className='flex flex-row items-center justify-center pb-6 text-white text-2xl gap-2'>
                        Source
                        <FaGithub className='text-gray-500'/>
                    </a>
                </div>



                
                <div className='flex justify-center'>
                    <img src={projects[currentProjectIndex].imageOne} alt="" className="h-80"/>
                </div>

                
                <div className='my-6 border-blue-500 border-t-8 border-b-8'>
                    <h1 className='text-4xl text-blue-500 text-left font-bold py-8 px-12'>Highlights</h1>   
                    <div className='flex flex-col gap-4 pb-8'>
                        { projects[currentProjectIndex].bulletPoints.map((bulletPoint, i) => {
                            return (    
                                <div key={i} className='flex gap-3 items-center px-12'>
                                    <FaDiamond className='text-xs text-blue-500'/>
                                    <p className='text-white font-medium'>{bulletPoint}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>

                <div className='flex justify-center'>
                    <img src={projects[currentProjectIndex].imageTwo} alt="" className="h-80"/>
                </div>

            </div>
        )}
    </section>
  )
}

export default Projects