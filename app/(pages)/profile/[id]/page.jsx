import React from 'react'
import AboutMe from '@/components/AboutMe/AboutMe'
import AboutVideo from '@/components/AboutVideo/AboutVideo'
import BottomNav from '@/components/BottomNav/BottomNav'
import Contact from '@/components/Contact/Contact'
import Navbar from '@/components/Navbar/Navbar'
import Recommendation from '@/components/Recommendation/Recommendation'
import Record from '@/components/Record/Record'
import Resume from '@/components/Resume/Resume'
import Services from '@/components/Services/Services'
import Skills from '@/components/Skills/Skills'
import Testimonial from '@/components/Testimonial/Testimonial'
import WebProfilePage from '@/components/WebProfilePage/WebProfilePage'
import dataJson from '@/utils/dataJson'
import { getSEOTags } from '@/utils/seo'

export const metadata = getSEOTags("userProfile");

export default function page(props) {
  return (
    <>
        <Navbar/>
        <div className='bg-[#FFF5EC] pb-[40px] lg:hidden' >
            <div>
              <Contact 
                user = {dataJson[props.params.id]}
              />
              <AboutMe 
                user = {dataJson[props.params.id]}
              />
              <Services 
                user={dataJson[props.params.id]}
              />
              <Record 
                user = {dataJson[props.params.id]}
              />
              <Resume 
                user = {dataJson[props.params.id]}
              />
              <Skills 
                user = {dataJson[props.params.id]}
              />
              <Recommendation 
                user = {dataJson[props.params.id]}
              />
              <Testimonial 
                user = {dataJson[props.params.id]}
              />
              <AboutVideo 
                user = {dataJson[props.params.id]}
              />
            </div>
            <div>
              <BottomNav />
            </div>
        </div>
        <div className='bg-[#FFF5EC] lg:flex hidden h-[calc(100vh-96px)] justify-center items-center'>
          <WebProfilePage 
            user = {dataJson[props.params.id]}
          />
        </div>
       
    </>
  )
}
