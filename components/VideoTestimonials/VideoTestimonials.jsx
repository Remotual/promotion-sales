"use client";

import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";

const testimonials = [
  {
    name: "DENIS OAKLEY",
    title: "CEO @ DENIS OAKLEY & CO LIMITED",
    image:
      "https://remotual.com/wp-content/uploads/2023/06/denis_oakley_thumbnail.webp",
    video:
      "https://remotual.com/wp-content/uploads/2023/06/Denis-Video-Testimonial-Compressed.mp4",
  },
  {
    name: "DR. MOHAMMAD OSMAN",
    title: "Medical Director/Chief Medical Officer UPMC/WVU Health",
    image:
      "https://remotual.com/wp-content/uploads/2023/06/dr_mohammad_osman_thumbnail.webp",
    video:
      "https://remotual.com/wp-content/uploads/2023/05/MVM-Testimonial-Video-Compressed.mp4",
  },
  {
    name: "ELIZABETH SMITH",
    title: "General Counsel",
    image:
      "https://remotual.com/wp-content/uploads/2023/06/elizabeth_smith_thumbnail.webp",
    video:
      "https://remotual.com/wp-content/uploads/2023/06/Massey-Martin-Testimonial-Video-Compressed.mp4",
  },
  {
    name: "DR. JAMES",
    title: "PISTILS & POLLEN",
    image:
      "https://remotual.com/wp-content/uploads/2024/06/Dr.-james-Thumbnail.jpg",
    video:
      "https://remotual.com/wp-content/uploads/2024/06/Pistils-Pollen-Testimonial-Video-Compressed-without-subtitles.mp4",
  },
  {
    name: "ERINN & MARION",
    title: "REGENERATIVE CHANGEMAKING",
    image:
      "https://remotual.com/wp-content/uploads/2024/06/Regenerative-1-1.jpg",
    video:
      "https://remotual.com/wp-content/uploads/2024/06/Client-Testimonial-from-Regenerative-Changemaking.mp4",
  },
  {
    name: "DANIEL F.",
    title: "THE GREEN HOUSER",
    image:
      "https://remotual.com/wp-content/uploads/2024/06/GreenHouser-1.jpg",
    video:
      "https://remotual.com/wp-content/uploads/2024/06/Client-Testimonial-from-TheGreeenHouse.mp4",
  },
];

export default function VideoTestimonials() {
  const dialogRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState("");

  const openDialog = (video) => {
    setVideoUrl(video);
    dialogRef.current.showModal();
  };
  const closeDialog = () => {
    dialogRef.current.close();
    setVideoUrl("");
  };

  return (
    <div className="py-12 px-6">
      <div className="w-11/12 m-auto">
      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${testimonial.image})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="relative flex items-center justify-center w-full border-[3px] border-[#FF7A00] rounded-[9px] lg:rounded-[30px] h-[320px] p-2 overflow-hidden"
          >
            {/* <div className="absolute flex items-center justify-center p-[30px] bg-[#070707]/10 rounded-full animate-ping animate-ease-in-out animate-alternate-reverse animate-delay-1000"></div>
            <div className="absolute flex items-center justify-center p-[25px] bg-[#070707]/10 rounded-full animate-ping animate-ease-in-out animate-alternate-reverse animate-delay-1000"></div>
            <div className="absolute flex items-center justify-center p-[20px] bg-[#070707]/5 rounded-full animate-ping animate-ease-in-out animate-alternate-reverse animate-delay-1000"></div> */}

            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                onClick={() => openDialog(testimonial.video)}
                className="bg-[#0707079E] text-white rounded-full p-10 md:p-6 hover:bg-white hover:text-black transition-all duration-500 ease-in-out "
              >
                <FaPlay />
              </button>
            </div>
          </div>
        ))}

        <dialog
          ref={dialogRef}
          className="rounded-lg p-0 bg-transparent w-full h-full backdrop:bg-black/80"
        >
          <div className="w-full h-full">
            <div className="relative h-full rounded-lg flex items-center">
              <button
                onClick={closeDialog}
                className="absolute top-2 right-2 text-xl z-50"
              >
                &times;
              </button>
              <video
                controls
                autoPlay={true}
                className="relative z-10 rounded-xl md:h-full w-full bg-white p-0"
                src={videoUrl}
              />
            </div>
          </div>
        </dialog>
      </div>

      <div className="w-10/12 mx-auto mt-10">
        <p className="text-[#FF7A00] font-normal italic text-center">
          “Highest possible reviews to Remotual! Very professional and organized
          - brings their A game to the table and make the project better.
          Definitely would rehire”
        </p>
          <p className="font-normal text-center py-5">
            Marty Fogarty, CEO @Heartland Law Firm
          </p>
      </div>
      </div>
    </div>
  );
}
