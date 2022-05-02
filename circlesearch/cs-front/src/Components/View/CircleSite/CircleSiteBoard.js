import React, {useState} from 'react'
import CommunityModal from '../Home/CommunityModal'

function CircleSiteBoard(props) {
    const [title, settitle] = useState(props.title)
  return (
    <div>
        <h3>{title}</h3>
        <CommunityModal/>
    </div>
  )
}

export default CircleSiteBoard