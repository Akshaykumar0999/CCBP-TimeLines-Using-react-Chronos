// Write your code here

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimelines = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  return (
    <div className="app-container">
      <div className="responsive-container">
        <div className="header-container">
          <h1 className="main-heading">
            MY JOURNEY OF
            <br />
            <p className="main-des">CCBP 4.0</p>
          </h1>
        </div>
        <div className="chrono-container">
          <Chrono
            theme={{
              secondary: 'white',
            }}
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
          >
            {timelineItemsList.map(each => renderTimelines(each))}
          </Chrono>
        </div>
      </div>
    </div>
  )
}

export default TimelineView
