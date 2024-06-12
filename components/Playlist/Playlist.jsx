"use client"
import React from "react"
import ReactPlayer from "react-player"
import { useState, useEffect } from "react"
import Image from "next/image"
import playBtn from "@/public/images/play.svg"
import unmutebtn from "@/public/images/unmute.svg"
import pausebtn from "@/public/images/pause.svg"
import muteBtn from "@/public/images/mute.svg"

let playlist = [
  {
    id: "vid1",
    title: "About You and Your Business",
    url: "https://youtu.be/k1tiepuYmi0",
    img: "https://cdn.remotual.com/testimonial_Images/testimonial1.svg",
  },
  {
    id: "vid2",
    title: "Challenges Impacting Your Business",
    url: "https://youtu.be/k1tiepuYmi0?t=84",
    img: "https://cdn.remotual.com/testimonial_Images/testimonial2.svg",
  },
  {
    id: "vid3",
    title: "Why Remotual VS Cheaper Alternative",
    url: "https://youtu.be/k1tiepuYmi0?t=325",
    img: "https://cdn.remotual.com/testimonial_Images/testimonial3.svg",
  },
  {
    id: "vid4",
    title: "Services availing from Remotual",
    url: "https://youtu.be/k1tiepuYmi0?t=488",
    img: "https://cdn.remotual.com/testimonial_Images/testimonial4.svg",
  },
  {
    id: "vid5",
    title: "Would you Recommend Remotual to others? Why?",
    url: "https://youtu.be/k1tiepuYmi0?t=525",
    img: "https://cdn.remotual.com/testimonial_Images/testimonial5.svg",
  }
]

export default function Playlist() {
  const [domLoaded, setDomLoaded] = useState(false)
  const [currentVideo, setcurrentVideo] = useState(playlist[0])

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const [play, setPlay] = useState(false)
  function changePlay() {
    setPlay(!play);
  }

  const handlePlay = () => {
    if (!play) {
      setPlay(true);
    }
  };

  const handlePause = () => {
    setPlay(false);
  };

  const handleEnded = () => {
    setPlay(false);
  };


  const [mute, setMute] = useState(false)
  function changeMute() {
    setMute(!mute)
  }

  function handleVideoChange(currentPlaying) {
    setcurrentVideo(currentPlaying)
  }

  return (
    <div className=" lg:w-11/12 mx-auto mt-10 ">
      <p className=" text-[45px] font-semibold text-center hidden lg:block">
        Our Clients are Our Best Advocates. Hear their Tales.
      </p>
      <div className="mx-auto w-fit lg:hidden">
        <p className="text-[34px] font-bold">Our Clients are Our</p>
        <p className="text-[34px] pl-2 font-bold border border-l-black border-l-[6px] bg-[linear-gradient(92deg,_#FF7A00_0.7%,_rgba(255,_122,_0,_0.40)_99.23%)]">
          Best Advocates. .
        </p>
      </div>
      {domLoaded && (
        <div className="flex flex-col lg:flex-row justify-between relative my-10 lg:border border-[#FF7A00] rounded-[25px]  w-full">
          <div className="m-2 p-1 lg:p-0 lg:w-[65%] rounded-[20px] overflow-hidden relative lg:border border-[#FF7A00]" style={{"aspectRatio": "16 / 9", "width": "100%"}}>
            <ReactPlayer
              url={currentVideo.url}
              width="100%"
              height="100%"
              playing={play}
              volume={1}
              onPlay={handlePlay}
              onPause={handlePause}
              onEnded={handleEnded}
              muted={mute}  
            />

            <div className="flex gap-1 bottom-0 left-8 absolute z-50 w-[100px] h-[70px] items-center">
              <div className="bg-[#FFEBD9] px-1 py-[4px] h-fit rounded-full flex gap-1">
                <Image
                  onClick={changePlay}
                  src={play ? pausebtn : playBtn}
                  alt=""
                ></Image>
                <Image
                  onClick={changeMute}
                  src={mute ? unmutebtn : muteBtn}
                  alt=""
                ></Image>
              </div>
            </div>
          </div>
          <div className="m-2 lg:m-0 lg:p-0 lg:w-[35%] rounded-tr-[20px] overflow-hidden">
            <div className="h-[50px] lg:h-[65px] bg-[#FF7A00] rounded-l-[60px]  text-white flex items-center pl-6">
              Playlist
            </div>
            <div
              id="playlist"
              className=" overflow-y-scroll lg:h-[300px] xl:h-[450px] w-full"
            >
              {playlist.map((video, index) => (
                <div key={index}>
                  <div
                    onClick={() => handleVideoChange(video)}
                    className={
                      video.id === currentVideo.id
                        ? " bg-gradient-to-l from-[rgba(255,122,0,0.30)_-0.1%] to-[rgba(255,122,0,0.00)_100%)] flex cursor-pointer w-full h-[80px] lg:px-[35px] py-2"
                        : "flex cursor-pointer w-full h-[80px] lg:px-[35px] py-2"
                    }
                  >
                    <img src={video.img} height={"100%"} width={"auto"}/>
                    <p className="flex items-center ml-[16px] text-sm xl:text-base font-semibold">
                      {video.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}