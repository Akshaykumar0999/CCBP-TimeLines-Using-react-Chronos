// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-container">
      <div className="header-card">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-card">
          <AiFillClockCircle />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <div className="description-card">
        <p className="course-description">{description}</p>
        <ul className="tagList-card">
          {tagsList.map(each => (
            <li className="each-list-item" key={each.id}>
              <p className="course-des">{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CourseTimelineCard
