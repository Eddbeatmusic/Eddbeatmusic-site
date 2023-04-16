import { createContext, useContext, useMemo, useState } from "react"

export const ProjectContext = createContext(null)

export function ProjectProvider(props) {
  const [project, setProject] = useState(null);
  
  const value = useMemo(() => {
    return({
      project,
      setProject
    })
  }, [project])

  return <ProjectContext.Provider value={value} {...props}/>
};

export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject outside provider projectConext');
  }

  return context
}
