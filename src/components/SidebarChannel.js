import React from 'react'
import './SidebarChannel.css'
import { useDispatch } from "react-redux"
import { setChannelInfo } from "../features/appSlice"

function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch()
  
  return (
    <div className='sidebarChannel' onClick={() => dispatch(setChannelInfo({
      channelId: id,
      channelName: channelName
    }))}>
      <h4>
        <div className="sidebarChannel__hash">#<span>{channelName}</span></div>
      </h4>
    </div>
  )
}

export default SidebarChannel
