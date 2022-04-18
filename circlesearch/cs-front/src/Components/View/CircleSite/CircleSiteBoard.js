import React, {useState} from 'react'
import Community_modal from '../Home/Community_modal'

function CircleSiteBoard(props) {
    const [title, settitle] = useState(props.title)
  return (
    <div>
        <h3>{title}</h3>
        <Community_modal/>
    </div>
  )
}

export default CircleSiteBoard