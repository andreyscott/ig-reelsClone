import React from 'react';
import './VideoHeader.css';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
function VideoHeader() {
	return (
		<div className='videoHeader'>
		<ArrowBackIcon />
		<h3> Reels </h3>
		<CameraAltIcon />

		</div>
	)

}

export default VideoHeader;