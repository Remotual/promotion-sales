'use client'
import React, {useState} from 'react'
import BottomNav from '../BottomNav/BottomNav'
import Contact from '../Contact/Contact'
import AboutMe from '../AboutMe/AboutMe'
import Services from '../Services/Services'
import Resume from '../Resume/Resume'
import Skills from '../Skills/Skills'
import Recommendation from '../Recommendation/Recommendation'
import Testimonial from '../Testimonial/Testimonial'
import AboutVideo from '../AboutVideo/AboutVideo'
import Record from '../Record/Record'


export default function WebProfilePage(props) {
  const [tabName, setTabName] = useState('profile')

  function handleTabName(tabvalue){
    setTabName(tabvalue);
  }

  return (
    <>
        <div className='h-[75vh] w-11/12 overflow-scroll flex gap-10 justify-between items-start'>
            <div>
                <BottomNav
                    handleTabName={handleTabName}
                    tabName={tabName}
                />
            </div>
            <div className='w-full h-full flex justify-center items-center relative'>
                <div className='w-[50%] h-full relative z-20'>
                    <Contact 
                          user={props.user}
                    />
                </div>
                {
                    {
                        'profile': 
                        <>
                            <div className='w-full h-[95%] overflow-scroll bg-white z-0 rounded-[0_8px_8px_0] '>
                                <AboutMe 
                                    user={props.user}
                                />
                                <Services 
                                    user={props.user}
                                />
                                <Record 
                                    user={props.user}
                                />
                            </div>
                        </>,
                        'resume': 
                        <>
                            <div className='w-full h-[95%] overflow-scroll bg-white z-0 rounded-[0_8px_8px_0] '>
                                <Resume 
                                    user={props.user}
                                />
                                <Skills 
                                    user={props.user}
                                />
                            </div>
                        </>,
                        'feedback': 
                        <>
                            <div className='w-full h-[95%] overflow-scroll bg-white z-0 rounded-[0_8px_8px_0] '>
                                <Recommendation 
                                    user={props.user}
                                />
                                <Testimonial 
                                    user={props.user}
                                />
                            </div>
                        </>,
                        'playlist': 
                        <>
                            <div className='w-full h-[95%] overflow-scroll bg-white z-0 rounded-[0_8px_8px_0] '>
                                <AboutVideo 
                                    user={props.user}
                                />
                            </div>
                        </>,
                    }[tabName]
                }
                
            </div>
        </div>
    </>
  )
}
