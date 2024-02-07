"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { CSSProperties } from "react"
import line from "@/public/images/line.svg"
import orangedot from "@/public/images/orangedot.svg"
import graydot from "@/public/images/graydot.svg"

import star from "@/public/images/star.svg"
import commaStart from "@/public/images/commaStart.svg"
import commaEnd from "@/public/images/commaEnd.svg"
import Image from "next/image"
export default function Slider(props) {

  const loopArray = Array.from({ length: 5 }, (_, i) => i);

  const indicatorStyles = {
    background: "#D9D9D9",
    width: 10,
    height: 10,
    borderRadius: 50,
    display: "inline-block",
    margin: "0px 5px",
  }
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={4000}
      showArrows={false}
      showStatus={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              key={index}
              style={{ ...indicatorStyles, background: "#FF7A00" }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          )
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        )
      }}
    >
      {
        props.testimonials?.map((testimonial) => {
          return (
            <div className="">
              <div className="w-[75%] h-[75%]  mx-auto">
                <div className="flex gap-4 items-center justify-center">
                  <div className="">
                    <img className="w-[60px]" src={testimonial.image} />
                  </div>

                  <div className="flex flex-col justify-between">
                    <p className="text-[15px] font-medium text-left">{testimonial.name}</p>
                    <p className="text-[13px]">{testimonial.projectTitle}</p>
                    <div className="flex gap-2 h-[12px] w-fit">
                      {
                        loopArray.map((number) => {
                          return (
                            <>
                              {
                                testimonial.star >= number + 1 ?
                                  <Image src={star}></Image>
                                  :
                                  ""
                              }
                            </>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 mt-6">
                  <p className="text-[15px] font-medium text-center">
                    {testimonial.tagline}
                  </p>
                  <p className="text-[14px] pb-10 text-center">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })
      }
      
    </Carousel>
  )
}
