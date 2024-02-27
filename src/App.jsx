import { NewProject } from "./components/NewProject";
import { Sidebar } from "./components/Sidebar";
import { NoProject } from "./components/NoProject";

import { useState } from "react";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjecID: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjecID: null,
      };
    });
  }

  function handleProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log("project state: ", projectState);

  let content;
  if (projectState.selectedProjecID === null) {
    content = <NewProject Add={handleProject}></NewProject>;
  } else if (projectState.selectedProjecID === undefined) {
    content = <NoProject onStartAddProject={handleAddProject}></NoProject>;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleAddProject} />
      {/* <NewProject /> */}
      {/* <NoProject onStartAddProject={handleAddProject}></NoProject> */}
      {content}
    </main>
  );
}

export default App;
