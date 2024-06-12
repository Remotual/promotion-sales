"use client"
import { useState } from "react"
import { useEffect } from "react"
import Image from "next/image"
import line from "@/public/images/line.svg"
import ReactPlayer from "react-player"
import playBtn from "@/public/images/play.svg"
import unmutebtn from "@/public/images/unmute.svg"
import pausebtn from "@/public/images/pause.svg"
import muteBtn from "@/public/images/mute.svg"
import headCircle from '@/public/images/heading_circle.svg'


export default function AboutVideo(props) {
  const [domLoaded, setDomLoaded] = useState(false)
  useEffect(() => {
    setDomLoaded(true)
  }, [])
  const [play, setPlay] = useState(false)
  function changePlay() {
    setPlay(!play)
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
  return (
    <div id="playlist" className="lg:mt-0 lg:pl-[30px] lg:pr-[60px] lg:shadow-none bg-white mt-[40px] p-[20px] rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]">
      <div className="relative mb-3">
          <div  className='relative right-[10px] bottom-[1px] z-0'><Image src={headCircle}></Image></div>
          <p className='text-[20px] absolute top-0 z-10 font-semibold'><span className='text-[#FF7A00] '>Who</span> is {props.user?.profile.name}?</p>
      </div>
        <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
      <p className="text-[20px] font-semibold mt-5">
        {
          "Get to Know "+ props.user?.profile.name + " in Just 2 minutes"
        }
      </p>
      <p className="text-[14px] font-normal leading-5 mt-[20px]">
        {props.user?.videoPlaylist.description}
      </p>
      {
        props.user?.videoPlaylist.youtubeLink !== "" ?
        <>
            {domLoaded && (

              <div className="mt-[20px] w-full relative border-[3px] rounded-[20px] overflow-hidden border-[#FF7A00]" style={{ "aspect-ratio": "16 / 9", "width": "100%;" }}>
                <ReactPlayer
                  url={props.user?.videoPlaylist.youtubeLink}
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
                      src={play ? pausebtn : playBtn} alt=""
                    ></Image>
                    <Image
                      onClick={changeMute}
                      src={mute ? unmutebtn : muteBtn} alt=""
                    ></Image>
                  </div>
                </div>
              </div>
            )}
        </>
        :
        ""
      }
      
    </div>
  )
}