import React, {useState} from "react"
import { Player } from 'video-react';

function Vplayer () {
  const videoFileUrls = [
    'videos/0.mp4',
    'videos/1.mp4',
    'videos/2.mp4',
    'videos/3.mp4',
    'videos/4.mp4',
    'videos/5.mp4',
    'videos/6.mp4',
    'videos/7.mp4',
    'videos/8.mp4',
    'videos/9.mp4',
    'videos/10.mp4',
    'videos/11.mp4',
    'videos/12.mp4',
    'videos/13.mp4',
    'videos/14.mp4',
    'videos/15.mp4',
    'videos/16.mp4',
    'videos/17.mp4',
    'videos/18.mp4',
    'videos/19.mp4',
    'videos/20.mp4'
  ]

  const [video, setVideo] = useState("videos/1.mp4");
  const [video2, setVideo2] = useState("videos/0.mp4");
  const [play, setPlay] = useState("true");
  const [play2, setPlay2] = useState("false");
  const [show, setShow] = useState("inline");
  const [show2, setShow2] = useState("none");
  const [start, setStart] = useState(true);
  //const vid1 = document.getElementById("v1")
  //const vid2 = document.getElementById("v2")


  function handleEnd () {
    let i = Math.floor(Math.random()*21);
    setVideo("videos/"+i+".mp4");
    //console.log(video.v2);
    document.getElementById("v2").play();
    document.getElementById("v1").pause();
    console.log(document.getElementById("v1"));
    setShow2("inline")
    //setShow("none")
  }

  function handleEnd2 () {
    let i = Math.floor(Math.random()*21)
    setVideo2("videos/"+i+".mp4")
    document.getElementById("v1").play();
    document.getElementById("v2").pause();
    //setShow("inline")
    setShow2("none")
  }

  function handleStart () {
    console.log({start});
    if(start == true){
      document.getElementById("v1").play();
      setStart("false");
    }
  }

  const styles = {
    display: show
  }

  const styles2 = {
    display: show2
  }

  return (
    <>
        <video
          id="v1"
          controls={false}
          src={video}
          style={styles}
          onLoadedMetadata={(handleStart)}
          onEnded={(handleEnd)}
        />
        <video
          id="v2"
          controls={false}
          autoPlay={false}
          src={video2}
          style={styles2}
          onEnded={(handleEnd2)}
        />
    </>
  )
}

export default Vplayer
