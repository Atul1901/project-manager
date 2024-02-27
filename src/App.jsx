import { NewProject } from "./components/NewProject";
import { Sidebar } from "./components/Sidebar";
import { NoProject } from "./components/NoProject";
import { SelectedProject } from "./components/SelectedProject";

import { useState } from "react";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjecID: undefined,
    projects: [],
  });

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjecID: id,
      };
    });
  }

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
        selectedProjecID: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjecID: undefined,
      };
    });
  }

  const slectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjecID
  );

  let content = <SelectedProject project={slectedProject}></SelectedProject>;
  if (projectState.selectedProjecID === null) {
    content = (
      <NewProject Add={handleProject} onCancel={handleCancel}></NewProject>
    );
  } else if (projectState.selectedProjecID === undefined) {
    content = <NoProject onStartAddProject={handleAddProject}></NoProject>;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
      />
      {/* <NewProject /> */}
      {/* <NoProject onStartAddProject={handleAddProject}></NoProject> */}
      {content}
    </main>
  );
}

export default App;
