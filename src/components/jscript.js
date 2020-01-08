// JavaScript Document
// function myFunction(x) {
//     x.classList.toggle("change");
//
// }

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


var i1 = 0;
var i2 = 0;
var i3 = 0;
var p = 1;
var vid1;
var vid2;
var vid3;
//var videoCount = videoSource.length;
var dur1 = 0.0;
var dur2 = 0.0;
var dur3 = 0.0;

//i1 = Math.floor(Math.random() * videoSource.length);
i1 = Math.floor(Math.random() * videoSource.length);
vid1 = document.getElementById("myVideo1");
vid1.setAttribute("src",videoSource[i1]);
vid1.load();
setTimeout(videoPlay2,1000);
i2 = Math.floor(Math.random() * videoSource.length);
vid2 = document.getElementById("myVideo2");
vid2.setAttribute("src",videoSource[i2]);
vid2.load();
i3 = Math.floor(Math.random() * videoSource.length);
vid3 = document.getElementById("myVideo3");
vid3.setAttribute("src",videoSource[i3]);
vid3.load();

function videoPlay1(){
  // dur2 = Math.floor(Math.random()*(vid2.duration-4.0))
  // console.log(dur2);
  // vid2.currentTime = dur2;
  vid2.play();
  p=2
  setTimeout(videoPlay3,3000);

  i1 = Math.floor(Math.random() * videoSource.length);
  vid1 = document.getElementById("myVideo1");
  vid1.setAttribute("src",videoSource[i1]);
  vid1.load();
  //vid1.play();
  //vid1.pause();

  switchy();
}

function videoPlay2(){
  // dur1 = Math.floor(Math.random()*(vid1.duration-4.0))
  // console.log(dur1);
  // vid1.currentTime = dur1;
  vid1.play();
  p=1
  setTimeout(videoPlay1,3000);

  i3 = Math.floor(Math.random() * videoSource.length);
  vid3 = document.getElementById("myVideo3");
  vid3.setAttribute("src",videoSource[i3]);
  vid3.load();
  //vid2.play();
  //vid2.pause();

  switchy();
}

function videoPlay3(){
  // dur1 = Math.floor(Math.random()*(vid1.duration-4.0))
  // console.log(dur1);
  // vid1.currentTime = dur1;
  vid3.play();
  p=3
  setTimeout(videoPlay2,3000);

  i2 = Math.floor(Math.random() * videoSource.length);
  vid2 = document.getElementById("myVideo2");
  vid2.setAttribute("src",videoSource[i2]);
  vid2.load();
  //vid2.play();
  //vid2.pause();

  switchy();
}

vid1.addEventListener("loadedmetadata", (event) => {
  dur1 = Math.floor(Math.random()*(vid1.duration-3.0))
  console.log(dur1);
  vid1.currentTime = dur1;
});

vid2.addEventListener("loadedmetadata", (event) => {
  dur2 = Math.floor(Math.random()*(vid2.duration-3.0))
  console.log(dur2);
  vid2.currentTime = dur2;
});

vid3.addEventListener("loadedmetadata", (event) => {
  dur3 = Math.floor(Math.random()*(vid3.duration-3.0))
  console.log(dur3);
  vid3.currentTime = dur3;
});

function switchy(){
  if(p==1){
    document.getElementById("myVideo1").style.display ="block";
    document.getElementById("myVideo2").style.display ="none";
    document.getElementById("myVideo3").style.display ="none";
  }
  if(p==2){
    document.getElementById("myVideo1").style.display ="none";
    document.getElementById("myVideo2").style.display ="block";
    document.getElementById("myVideo3").style.display ="none";
  }
  if(p==3){
    document.getElementById("myVideo1").style.display ="none";
    document.getElementById("myVideo2").style.display ="none";
    document.getElementById("myVideo3").style.display ="block";
  }
}

// function myHandler() {
//     i = Math.floor(Math.random() * 18);
//     videoPlay(i);
// }
