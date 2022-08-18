import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <div className='newsletter-box'>
            <h1>Our Newsletter</h1>
            <div><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.</p></div>
            <div className="input-field">
                <button>submit</button>
                <input placeholder='your email address' type="email" />
            </div>
        </div>
    </div>
  )
}

export default NewsLetter