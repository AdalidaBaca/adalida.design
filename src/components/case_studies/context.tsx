import type { Project } from 'projects'
import { createContext } from 'react'

export default createContext<Project | null>(null)
