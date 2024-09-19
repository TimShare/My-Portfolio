import "./Style.css";
import gitHubIcon from "./gitHub-black.svg";
const ButtonGitHub = ({ link, isGit }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default ButtonGitHub;
