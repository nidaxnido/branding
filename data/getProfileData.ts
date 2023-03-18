import fs from 'fs'
import path from 'path'

export async function getProfileData() {
    const fullPath = path.join(process.cwd(), "data/about.json")
    // console.log("cek "+ fullPath)

    const content = fs.readFileSync(fullPath, "utf8")
    return JSON.parse(content)
}

export async function getProjectsData() {
    const fullPath = path.join(process.cwd(), "data/projects.json")
    // console.log("cek "+ fullPath)

    const content = fs.readFileSync(fullPath, "utf8")
    return JSON.parse(content)
}