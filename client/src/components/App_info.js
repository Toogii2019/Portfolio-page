import '../App.css';
import '../style.css';

function AppRender(props) {
  return (
    <div className="flip-box">
    <div className="flip-box-inner">
      <div className="flip-box-front">
      <img src={ props.info.img } alt="app image" className="my-portfolio-images"></img>
      </div>
      <div className="flip-box-back">
        <h2>{props.info.name}</h2>
        <p>{props.info.description}</p>
        <a className="github-link" href={props.info.githubLink}  target="_blank">Github Link</a>
        <a className="deployed-link" href={props.info.deployedLink}  target="_blank">Deployed Link</a>

      </div>
    </div>
  </div>
  );
}

export default AppRender;
