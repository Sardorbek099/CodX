import React from 'react'
import './courses.css'




export default function Courses() {
  return (
    <div className='courses_section'>
      <div className='container'>
        <div className='row course_gap'>
            <div className='course_col1'>
                <div className='course_card1'>
                    <div className='course_number'>01</div>
                    <p className='course_name'>Motion Graphic</p>
                    <p className='about_course'>Suspendisse sem neque, auctor a elementum ut,<br/> varius vel leo. Donec diam arcu, porta et magna at</p>
                </div>
                <div className='course_card2'>
                    <div className='course_number'>02</div>
                    <p className='course_name'>Digital Illustration</p>
                    <p className='about_course'>Suspendisse sem neque, auctor a elementum ut,<br/> varius vel leo. Donec diam arcu, porta et magna at</p>
                </div>
                <div className='course_card3'>
                    <div className='course_number'>03</div>
                    <p className='course_name'>Photography</p>
                    <p className='about_course'>Suspendisse sem neque, auctor a elementum ut,<br/> varius vel leo. Donec diam arcu, porta et magna at</p>
                </div>
            </div>
            <div className='course_col2'>
                <img src='./course/course.png' alt='course'/>
            </div>
        </div>
      </div>
    </div>
  )
}
