import React from 'react';
import './VideoFooter.css';
import { Button, } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Ticker from "react-ticker";


function VideoFooter ({  likes, shares, channel, avaterSrc, song }) {
	return (
		<div className='videoFooter'>

		<div className='videoFooter_text'>

     <AccountCircleIcon src={avaterSrc} />
     <h3>
     {channel} <Button>follow me </Button>

     </h3></div>

       <div className="videoFooter_ticker">
		<MusicNoteIcon className="videofooter_icon" />
         <Ticker mode="smooth">
         {({ index}) => (
         	<h1> {song} </h1>

         	)}

      </Ticker>
		</div>
		<div className="videoFooter_actions">
		<div className="videoFooter_actionsLeft">
		<FavoriteIcon fontSize="large"  />
		<ModeCommentIcon fontSize="large" />
		<SendIcon fontSize="large" />
		<MoreHorizIcon fontSize="large" />


		</div>
		<div className="videoFooter_actionsRight">
		<div className="videoFooter_stat">
		<FavoriteIcon />
		<p> {likes} </p>
		</div>
		<div className="videoFooter_stat">
		<ModeCommentIcon />
		<p>{shares} </p>
		</div>

        </div>

		</div>



		</div>	 
		)
}



export default VideoFooter;