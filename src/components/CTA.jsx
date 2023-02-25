import React from 'react'
import CV from '../../src/components/natalie_pitts_cv.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        &nbsp; &nbsp;
        <a href={CV} download className='btn'>Download CV</a> 
        
    </div>
  )
}

export default CTA
