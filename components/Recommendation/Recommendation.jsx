import Image from "next/image"
import headCircle from '@/public/images/heading_circle.svg'

export default function Recommendation(props) {
  return (
    <div id="feedback" className="lg:mt-0 lg:shadow-none lg:pl-[30px] lg:pr-[60px] bg-white mt-[40px] p-[20px] rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]">
      <div className="relative mb-3">
        <div  className='relative right-[10px] bottom-[1px] z-0'><Image src={headCircle} alt=""></Image></div>
        <p className='text-[20px] absolute top-0 z-10 font-semibold'><span className='text-[#FF7A00] '>Recommendations</span></p>
      </div>

      <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>

        <p className="text-[14px] font-normal text-justify mt-5">
          {props.user?.feedback.recommendation}
        </p>
    </div>
  )
}