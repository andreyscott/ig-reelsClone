import React, { useState, useRef} from 'react';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
import './VideoCard.css';

function VideoCard({url, likes, shares, channel, avaterSrc, song }) {

	const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);

  const onVideoPress = () => {
   if (isVideoPlaying) {
        //stop
     videoRef.current.pause();
     setIsVideoPlaying(false)
   } else {
    // play
    videoRef.current.play();
    setIsVideoPlaying(true)
    }
  }

	return (
		<div className="videoCard">
		<VideoHeader />
		<video 
		ref={videoRef}
		onClick={onVideoPress}
        className="videoCard_player"
		src={url}
		// type="video/mp4"
		alt='IG reel video'
		loop
		>
		</video>

		<VideoFooter 
		channel={channel}
		likes={likes}
		shares={shares}
		avaterSrc={avaterSrc}
		song={song}

		/>

		</div>
		)
}

export default VideoCard; 