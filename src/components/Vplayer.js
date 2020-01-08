import React, {useState} from "react"
import { Player } from 'video-react';


function Vplayer () {
  var videoSource = new Array();
  videoSource[0]='videos/01.mp4';
  videoSource[1]='videos/02.mp4';
  videoSource[2]='videos/03.mp4';
  videoSource[3]='videos/04.mp4';
  videoSource[4]='videos/05.mp4';
  videoSource[5]='videos/06.mp4';
  videoSource[6]='videos/07.mp4';
  videoSource[7]='videos/08.mp4';
  videoSource[8]='videos/09.mp4';
  videoSource[9]='videos/10.mp4';
  videoSource[10]='videso/11.mp4';
  videoSource[11]='videos/12.mp4';
  videoSource[12]='videos/13.mp4';
  videoSource[13]='videos/14.mp4';
  videoSource[14]='videos/15.mp4';
  videoSource[15]='videos/16.mp4';
  videoSource[16]='videos/17.mp4';
  videoSource[17]='videos/18.mp4';
  videoSource[18]='videos/19.mp4';
  videoSource[19]='videos/20.mp4';
  videoSource[20]='videos/21.mp4';

  const [video, setVideo] = useState("videos/1.mp4");
  const [video2, setVideo2] = useState("videos/1.mp4");
  const [play, setPlay] = useState(true);
  const [play2, setPlay2] = useState(false);
  //let video = "videos/01.mp4"
  //let play = true

  function handleEnd () {
    let i = Math.floor(Math.random()*21)
    setVideo("videos/"+i+".mp4")
    setPlay2(true)
    setPlay(false)
  }
  function handleEnd2 () {
    let i = Math.floor(Math.random()*21)
    setVideo2("videos/"+i+".mp4")
    setPlay(true)
    setPlay2(false)
  }
  return (
    <>
        <Player
          controls={false}
          playing={play}
          playsInline
          fluid={true}
          autoPlay
          style={{display: 'none'}}
          src={video}
          onEnded={(handleEnd)}
        />
        <Player
          controls={false}
          playing={play2}
          playsInline
          fluid={true}
          autoPlay
          style={{display: 'none'}}
          src={video2}
          onEnded={(handleEnd2)}
        />
    </>
  )
}

export default Vplayer
