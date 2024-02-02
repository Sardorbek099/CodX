import React from 'react'
import './about.css'
export default function About() {
  return (
    <div className='about_section'>
        <div className='container'>
            <p className='about_title'>Hey there,<span className='about_title_1'>we are</span></p>
            <p className='about_description'>Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam <br/><span className='about_description_size'>arcu, porta et magna at</span></p>
            <div className='d-flex forMargin'>
                <button className='active_button'>Jack</button>
                <button className='passive_button1'>Suni</button>
                <button className='passive_button2'>Colin</button>
            </div>
            <div className='row about_card'>
                <div className='about_col-6'>
                    <img src='./about/about1.png' alt='user'/>
                </div>
                <div className='about_col-6 texts'>
                    <p className='forJob'>Digital Artist</p>
                    <p className='forTitle'>Pellentesque blandit <br/>in quam rhoncus</p>
                    <p className='forText'>Suspendisse ante mauris, volutpat congue sem ac,<br/> ultrices tempor lorem. Nullam eget vehicula tellus,<br/> ac consectetur urna. Mauris tincidunt, libero id <br/> ultrices tincidunt, mi leo pharetra dolor, sed luctus <br/> dui ipsum et augue. Integer non quam feugiat, <br/> porttitor libero a, tempor neque. Nulla ac orci <br/> mauris. Quisque nisi nisl, rutrum ac diam et, semper <br/> commodo quam</p>
                </div>
            </div>
            <div className='about_work'>
                <div className='row about_gap'>
                    <div className='about_col-5'>
                        <img src='./about/about2.png' alt='about' />
                    </div>
                    <div className='about_col-7'>
                        <p className='our_work'>our work</p>
                        <p className='our_work_title'>“Um… what’s going on <br/> here?”</p>
                        <p className='our_work_description'>Nulla facilisi. Praesent molestie diam eu enim aliquet <br/> pellentesque. Vestibulum consectetur vestibulum tristique. Sed <br/> purus neque, maximus fermentum bibendum et, porta in sapien.</p>
                        <button className='about_button'>About Codx</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
