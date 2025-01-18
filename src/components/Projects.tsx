import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from '/steak.jpg'
import { FaGithub } from "react-icons/fa"
import { FaDiamond } from "react-icons/fa6"
import uatanks from "../resources/uatanks-2.png"
import lavaEscape from "../resources/lavaescape-2.png"
import juggling from "../resources/soccer-1.jpg"
import thief from "../resources/thief-1.png"

const Projects = () => {

  const projects: 
    { 
        id: number,
        link: string,
        github: string,
        name: string,
        image: string,
        tools: string[],
        bulletPoints: string[]
    }[] = [
        {
            id: 0,
            link: "/schooljams",
            github: "https://github.com/ASweet10/Games/tree/main",
            name: "AI Tanks",
            image: uatanks,
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
            link: "/",
            github: "https://github.com/ASweet10/Games",
            name: "Horror Game WIP",
            image: placeholder,
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
            link: "/btdemo",
            github: "https://github.com/ASweet10/Games/tree/main/Demo-BehaviorTree",
            name: "Behavior Tree Demo",
            image: placeholder,
            tools: [
                "Unity",
                "C#",
            ],
            bulletPoints: [
                "",
                "",
            ]
        },
    ]

    const personalProjects: 
    { 
        id: number,
        link: string,
        github: string,
        hasCode: boolean,
        name: string,
        image: string,
        tools: string[],
        bulletPoints: string[]
    }[] = [
        {
            id: 0,
            link: "/backyardjuggling",
            github: "https://github.com/ASweet10/Games/tree/main/BackyardJuggling",
            hasCode: true,
            name: "Backyard Juggling",
            image: juggling,
            tools: [
                "Unity",
                "C#",
            ],
            bulletPoints: [
                "Android soccer juggling game",
                "Learned mobile dev fundamentals",
                "Resolutions, scaling, save/load permissions, etc.",
            ]
        },
        {
            id: 1,
            link: "/schooljams",
            github: "",
            hasCode: false,
            name: "Lava Escape",
            image: lavaEscape,
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
            id: 2,
            link: "/schooljams",
            github: "https://github.com/ASweet10/Games/tree/main/WeeklyJam235_Bandit",
            hasCode: true,
            name: "Thief in the Night",
            image: thief,
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
        <div className='mx-4'>
            <h1 className='h-full w-full text-5xl font-semibold text-white text-center pb-20'>AI Projects</h1>
            <div className='flex flex-col md:flex-row gap-20 justify-center'>
                { projects.map((project) => {
                    return (
                        <div key={project.id} className='max-w-[450px]'>
                            <Link to={project.link} className='flex justify-center items-center'>
                                <img src={project.image} alt="" className='hover:scale-105 transition-all duration-200 rounded-lg hover:border-2 h-80'/>
                            </Link>

                            <h1 className='text-3xl text-white text-center font-semibold py-4'>{project.name}</h1>
                            <div className='mx-4'>
                                { project.bulletPoints.map((bulletPoint, i) => {
                                    return (
                                        <div key={i} className='flex gap-2 items-center'>
                                            <FaDiamond className='text-xs text-white'/>
                                            <p className='text-white font-medium'>{bulletPoint}</p>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className='w-full flex justify-center items-center my-4'>
                                <a href={project.github} className='bg-gray-700 rounded-lg h-12 w-20 flex justify-center items-center'>
                                    <FaGithub className='text-4xl text-white text-center'/>
                                </a>
                            </div>

                        </div>
                    )
                })}
            </div>

            <div className='pt-12'>
                <h1 className='h-full w-full text-5xl font-semibold text-white text-center pb-20'>School & Game Jams</h1>
                <div className='flex flex-col md:flex-row gap-20 justify-center'>
                    { personalProjects.map((project) => {
                        return (
                            <div key={project.id} className='max-w-[450px]'>
                                <Link to={project.link} className='flex justify-center items-center'>
                                    <img src={project.image} alt="" className='hover:scale-105 transition-all duration-200 rounded-lg hover:border-2 h-80'/>
                                </Link>

                                <h1 className='text-3xl text-white text-center font-semibold py-4'>{project.name}</h1>
                                <div className='mx-4 my-6'>
                                    { project.bulletPoints.map((bulletPoint, i) => {
                                        return (
                                            <div key={i} className='flex gap-2 items-center'>
                                                <FaDiamond className='text-xs text-white'/>
                                                <p className='text-white font-medium'>{bulletPoint}</p>
                                            </div>
                                        )
                                    })}
                                </div>

                                { project.hasCode && (
                                    <div className='w-full flex justify-center items-center mb-4'>
                                        <a href={project.github} className='bg-gray-700 rounded-lg h-12 w-20 flex justify-center items-center'>
                                            <FaGithub className='text-4xl text-white text-center'/>
                                        </a>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects