import React from 'react'

const About = () => {
  return (
    <div className='aboutsection2'>
        <div className="About_Title">About page</div>
        <div style={{display:'flex'}}>
            <div className='our_story'>
                Our Story
            </div>
            <hr className='line1'></hr>
        </div>

        <div style={{display:'flex'}}>
          <div className='block1'>
            <p>
              Welcome to Cosmic Prophecies, where the wisdom 
              of the stars meets compassionate guidance. Founded 
              by Nivedita, an experienced astrologer with a passion 
              for helping others navigate life's challenges, 
              we offer personalized astrology counseling to illuminate 
              your path forward.
            </p>
          </div>
          <div className="blockpic1"></div>
        </div>

        {/* ---------What we Offer ----------------- */}

        <div style={{display:'flex'}}>
            <div className='what_we_offer'>
                What we offer
            </div>
            <hr className='line2'></hr>
        </div>

        <div style={{display:'flex'}}>
          <div className='block2'>
            <ul type='none'>
              <li><b>Personalize Chart Reading</b>
                <ul type='none'>
                  <li>
                    <p>
                    We create detailed birth charts and offer interpretations 
                    tailored to your unique planetary alignments.
                    </p>
                  </li>
                </ul>
              </li>
              <li><b>Guidance & Counseling</b>
                <ul type='none'>
                  <li>
                    <p>
                    Our sessions are designed to provide clarity, support, 
                    and actionable insights, helping you make 
                    informed decisions.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="blockpic2"></div>
        </div>
        
{/* -----------------------Meet Astrologer ------------------ */}

        <div style={{display:'flex'}}>
            <div className='meet_our_astrologer'>
                Meet Our Astrologers
            </div>
            <hr className='line3'></hr>
            <hr className='line4'></hr>
        </div>

        <div style={{display:'flex'}}>
          <div className="blockpic3"></div>
          <div className='block3'>
            <p>
            Nivedita is a seasoned astrologer with 3 years of experience in 
            natal astrology, predictive astrology, 
            relationship astrology.
            
            Nivedita has a deep understanding of the cosmic influences
            that shape our lives. She are committed to helping clients 
            gain clarity, empowerment, and a deeper understanding of themselves 
            through the stars
            </p>
          </div>
          
        </div>

    </div>
  )
}

export default About