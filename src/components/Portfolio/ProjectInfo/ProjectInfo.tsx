import "./projectInfo.scss";

interface ProjectInfoProps {
  thumbnail: string;
  children: JSX.Element[];
}

const ProjectInfo: React.FC<ProjectInfoProps> = (props: ProjectInfoProps) => {
  return (
    <div className="project-info">
      <div className="project-thumbnail">
        <img src={props.thumbnail}></img>
      </div>
      <div className="project-text">{props.children}</div>
    </div>
  );
};

export default ProjectInfo;
