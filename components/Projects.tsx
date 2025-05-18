"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { 
  SiHtml5, SiJavascript, SiTailwindcss, 
  SiTypescript, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiNextdotjs,
  SiFlask,
  SiPython,
  SiVercel
} from "react-icons/si";
import { ExternalLink, Code, Eye } from "lucide-react"

interface Project {
  title: string
  url: string
  github: string
  imageUrl: string
  techStack: string[]
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"fullstack" | "mini" >("fullstack")
  const [, setHoveredIndex] = useState<number | null>(null)

  const projects: Record<string, Project[]> = {
    fullstack: [
      {
        title: "InvestyGram",
        url: "https://investygram.vercel.app/",
        imageUrl: `/images/investy.jpg`,
        github: "https://github.com/Madhuj275/InvestyGram",
        techStack: ["React", "Typescript", "Next.js", "MongoDB"],
      },
      {
        title: "InkSpect",
        url: "https://inkspect.vercel.app/",
        imageUrl: `/images/inkspect.png`,
        github: "https://github.com/21prnv/SatyaCheck",
        techStack: ["Next.js", "React", "Tailwind CSS", "Python", "Flask"],
      },
      {
        title: "DocuTrace",
        url: "https://github.com/Madhuj275/Certify-Dapp",
        imageUrl: `/images/docu.png`,
        github: "https://github.com/Madhuj275/Certify-Dapp",
        techStack: ["Python", "Solidity", "Javascript"],
      },
      {
        title: "ShadowReport",
        url: "https://shadow-report-theta.vercel.app/",
        imageUrl: `/images/sr.png`,
        github: "https://github.com/Madhuj275/ShadowReport",
        techStack: ["Typescript", "Next.js", "React"],
      },
      
    ],
    mini: [
      
      {
        title: "Blockchain Simulator",
        url: "https://blockchain-simulation-madhuj.netlify.app/",
        imageUrl: `/images/bl.png`,
        github: "https://github.com/Madhuj275/Blockchain-Simulation",
        techStack: ["Python", "DockerFile", "Javascript"],
      },
      {
        title: "CRED APP",
        url: "https://github.com/Madhuj275/CRED-APP",
        imageUrl: `/images/cred.png`,
        github: "https://github.com/Madhuj275/CRED-APP",
        techStack: ["Javascript", "HTML5", "React", "MongoDB", "Node.js"],
      },
      {
        title: "Railway Analysis",
        url: "https://railway-analysis-madhuj.streamlit.app/",
        imageUrl: `/images/railway.png`,
        github: "https://github.com/Madhuj275/Railway-Analysis",
        techStack: ["Python", "Jupyter Notebook", "Streamlit"],
      },
      {
        title: "Provable Dice Game",
        url: "https://provable-fair-dice-game.netlify.app/",
        imageUrl: `/images/dice.png`,
        github: "https://github.com/Madhuj275/Fair-Dice-Game",
        techStack: ["Typescript", "Javascript", "HTML5"],
      },
    ],
    // landing: [
    //   {
    //     title: "Zen Ops",
    //     url: "http://Zen-ops.vercel.app",
    //     imageUrl: `/images/zen-ops.jpg`,
    //     github: "https://github.com/k/Zenops",
    //     techStack: ["Next.js", "React", "Tailwind CSS"],
    //   },
    //   {
    //     title: "Hy Krox",
    //     url: "http://Hy-krox.vercel.app",
    //     imageUrl: `/images/hy-krox.jpg`,
    //     github: "https://github.com/k/Hy-krox",
    //     techStack: ["Next.js", "React", "Tailwind CSS"],
    //   },
    // ],
  }

  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "Next.js":
        return <SiNextdotjs className="text-white" />
      case "React":
        return <SiReact className="text-cyan-400" />
      case "Node.js":
        return <SiNodedotjs className="text-green-500" />
      case "Express":
        return <SiExpress className="text-white" />
      case "MongoDB":
        return <SiMongodb className="text-green-700" />
      case "Tailwind CSS":
        return <SiTailwindcss className="text-blue-500" />
      case "TypeScript":
        return <SiTypescript className="text-blue-600" />
      case "Python" :
        return <SiPython className= "text-yellow-400" />
      case "Flask" :
        return <SiFlask className="text-blue-600" />
      case "Javascript" :
        return <SiJavascript className="text-green-700" />
      case "HTML5" :
        return <SiHtml5 className ="text-blue-600" />
      default:
        return <SiVercel className="text-white" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-black text-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
        <motion.div
          className="text-4xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-[#f1f5f966] via-[#f1f5f9] via-51% to-[#f1f5f966] text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          
          <h2 className="text-3xl md:text-5xl text-white lg:text-6xl font-bold relative inline-block">
            My <span className="text-blue-500">Projects</span>
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
        </motion.div>
          <p className="text-gray-400  max-w-lg mx-auto text-sm md:text-base">
            A showcase of my web development journey, featuring full-stack applications, mini projects.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center rounded-xl mb-10">
          <div className="inline-flex p-1 bg-gray-900/50 rounded-xl">
            {(["fullstack", "mini"] as const).map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-blue-500 text-white shadow-lg rounded-xl shadow-blue-500/20"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "fullstack" ? "Fullstack Projects" : tab === "mini" ? "Mini Projects" : "Landing Pages"}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-6 lg:gap-24">
          {projects[activeTab].map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 h-full transition-all duration-300  hover:shadow-lg hover:shadow-blue-500/10">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>

                  {/* Action buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      aria-label={`Visit ${project.title}`}
                    >
                      <Eye className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      aria-label={`View code for ${project.title}`}
                    >
                      <Code className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                      aria-label={`External link to ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-gray-500 text-xs mb-3 truncate">{project.url.replace("http://", "")}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 bg-gray-800/50 px-2 py-0.5 rounded-md text-xs font-medium text-gray-300"
                      >
                        <span className="text-base">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects button */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/Madhuj275"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 text-sm"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
