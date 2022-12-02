import React from 'react'
import CV from '../../src/NataliepCV_WebDeveloper.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        <br/> <br/>
        <a href={CV} download className='btn'>Download CV</a> 
        
    </div>
  )
}

export default CTA
