

// components/projects/SingleProject/tabs/OverviewTab.jsx
import { Calendar, Clock, Users, Tag, ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function OverviewTab({ project, fadeIn, staggerContainer, motion }) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <motion.div variants={fadeIn} className="md:col-span-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Project Overview</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
            {project.description || "No description available"}
          </p>

          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {(project.technologies || []).map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-1 px-2 py-1 rounded-full 
                bg-gradient-to-r from-amber-100 via-orange-50 to-yellow-100 
                text-amber-800 text-xs sm:text-sm border border-amber-200"
              >
                <Tag className="h-3 w-3" />
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.creatorProfile && (
              <Link
                href={project.creatorProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg 
                bg-gradient-to-r from-amber-500 to-orange-400 text-white 
                hover:shadow-md hover:scale-[1.02] transition-all text-sm sm:text-base"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg 
                bg-gradient-to-r from-gray-800 to-gray-900 text-white 
                hover:shadow-md hover:scale-[1.02] transition-all text-sm sm:text-base"
              >
                <Github className="h-4 w-4" />
                <span>View Code</span>
              </Link>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 
          rounded-xl p-4 sm:p-6 border border-amber-100"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Project Details</h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700 text-sm sm:text-base">Updated on</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {project.deadline ? new Date(project.deadline).toLocaleDateString() : "N/A"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-3">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700 text-sm sm:text-base">Status</p>
                <p className="text-gray-600 text-xs sm:text-sm">{project.status || "N/A"}</p>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-3">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700 text-sm sm:text-base">Views</p>
                <p className="text-gray-600 text-xs sm:text-sm">{project.views || 0}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={fadeIn}>
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Key Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {(project.features || []).slice(0, 4).map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 
              border border-amber-100 rounded-lg p-3 sm:p-4 flex items-start gap-2 sm:gap-3 
              hover:shadow-md hover:border-amber-300 transition-all"
            >
              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full 
              bg-gradient-to-tr from-amber-500 to-orange-400 
              flex items-center justify-center text-white text-xs sm:text-sm shadow-sm">
                {index + 1}
              </div>
              <p className="text-gray-700 text-sm sm:text-base">{feature}</p>
            </div>
          ))}
          {!(project.features && project.features.length) && (
            <p className="text-gray-500 text-sm sm:text-base col-span-full">
              No features listed for this project.
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
