'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
    {
        id: 1,
        title: "Mechanical Design Innovation: Next-Gen Robotics",
        image: "/images/project1.jpeg",
        description: "Revolutionizing industrial automation with advanced mechanical designs for robotic systems.",
        author: "Pascal",
        date: "Oct 15",
        comments: 16
    },
    {
        id: 2,
        title: "Sustainable Energy Solutions: Solar-Powered Devices",
        image: "/images/project2.jpeg",
        description: "Developing cutting-edge solar-powered devices for everyday use, reducing carbon footprint.",
        author: "Pascal",
        date: "Oct 14",
        comments: 32
    },
    {
        id: 3,
        title: "AI-Driven Manufacturing Optimization",
        image: "/images/project3.jpeg",
        description: "Implementing AI algorithms to enhance manufacturing efficiency and reduce waste.",
        author: "Pascal",
        date: "Oct 13",
        comments: 24
    },
    {
        id: 4,
        title: "Biomechanical Prosthetics: Enhancing Mobility",
        image: "/images/project4.jpeg",
        description: "Creating advanced prosthetics using biomechanical principles for improved quality of life.",
        author: "Pascal",
        date: "Oct 12",
        comments: 41
    },
    {
        id: 5,
        title: "Smart City Infrastructure: IoT Integration",
        image: "/images/project5.jpeg",
        description: "Designing IoT-based solutions for efficient urban resource management and sustainability.",
        author: "Pascal",
        date: "Oct 11",
        comments: 28
    }
]

export default function ProjectsPage() {
    const [featuredProject, ...topProjects] = projects
    const [expandedProject, setExpandedProject] = useState<number | null>(null)

    return (
        <div className="min-h-screen bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <motion.h1
                    className="text-4xl font-bold mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Latest Projects
                </motion.h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="bg-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={featuredProject.image}
                                    alt={featuredProject.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-3xl">{featuredProject.title}</CardTitle>
                                <CardDescription className="text-gray-400">
                                    {featuredProject.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-400">
                                    {featuredProject.author} | {featuredProject.date} | {featuredProject.comments} comments
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <div className="lg:col-span-1">
                        <motion.h2
                            className="text-2xl font-bold mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Top Projects
                        </motion.h2>
                        {topProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                            >
                                <Card
                                    className={`bg-gray-800 mb-4 overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-yellow-400/20 cursor-pointer ${expandedProject === project.id ? 'h-auto' : 'h-24'
                                        }`}
                                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                                >
                                    <div className="flex h-full">
                                        <div className="relative w-24 h-24 flex-shrink-0">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col justify-between flex-grow">
                                            <h3 className="text-lg font-semibold">{project.title}</h3>
                                            <p className="text-sm text-gray-400 mt-1">
                                                {project.author} | {project.date} | {project.comments} comments
                                            </p>
                                        </div>
                                    </div>
                                    {expandedProject === project.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="p-4 border-t border-gray-700"
                                        >
                                            <p className="text-sm text-gray-300">{project.description}</p>
                                        </motion.div>
                                    )}
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <Link href="/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Back to Home
                </Link>
            </motion.div>
        </div>
    )
}