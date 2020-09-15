import React, { useState, useEffect } from 'react';
import'./App.css';
import VideoCard from './VideoCard';
import db from './firebase';

function App() {

const [reels, setReels] = useState([]);

useEffect(() => {
  //app component will run once when it loads
  db.collection('reels').onSnapshot(snapshot => {
    setReels(snapshot.docs.map(doc => doc.data()))
  })
}, [])

  return (
    <div className="app">
    
    <div className="app_top">
  {/* image at the top*/}
  <img className="app_logo"
  src="https://s3.amazonaws.com/freebiesupply/large/2x/instagram-logo-white-on-black.png"
  alt=""
  />
  <h1> Reels </h1>
   </div>

    <div className="app_videos">
  { /* scrollable video container*/ }
  {reels.map(({channel, avatarSrc, song, likes, shares, url }) => ( 

  <VideoCard 
  channel={channel}
  avatarSrc={ avatarSrc }
  song= {song}
  url={url}
  likes={likes}
  shares={shares}
  />

))}

  {reels.map(({channel, avatarSrc, song, likes, shares, url1 }) => ( 
  
  <VideoCard 
  channel={channel}
  avatarSrc={ avatarSrc }
  song= {song}
  url={url1}
  likes={likes}
  shares={shares}
  />
))}

  {reels.map(({channel, avatarSrc, song, likes, shares, url2 }) => ( 
  
  <VideoCard 
  channel={channel}
  avatarSrc={ avatarSrc }
  song= {song}
  url={url2}
  likes={likes}
  shares={shares}
  />
))}

  {reels.map(({channel, avatarSrc, song, likes, shares, url3 }) => ( 
  
  <VideoCard 
  channel={channel}
  avatarSrc={ avatarSrc }
  song= {song}
  url={url3}
  likes={likes}
  shares={shares}
  />
))}





  </div>
    </div>
  );
}

export default App;
