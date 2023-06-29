// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <div className="project-container">
      <div className="card-container">
        <img className="project-img" src={imageUrl} alt="project" />
        <div className="header-card">
          <h1 className="project-title">{projectTitle}</h1>
          <div className="duration-card">
            <AiFillCalendar />
            <p className="project-duration">{duration}</p>
          </div>
        </div>
        <p className="project-description">{description}</p>
        <a className="anchor-element" href={projectUrl}>
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
