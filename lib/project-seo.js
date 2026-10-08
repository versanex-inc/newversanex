import { cache } from "react"
import connectDB from "@/lib/dbConnect"
import Project from "@/lib/model/Projects"

export const publishedProjectFilter = {
  $or: [{ publishStatus: "published" }, { publishStatus: { $exists: false } }],
}

export const getProjectForSeo = cache(async (slug) => {
  await connectDB()
  return Project.findOne({ slug, ...publishedProjectFilter }).select("title slug description images updatedAt").lean()
})
