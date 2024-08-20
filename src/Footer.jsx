import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
};
  return (
    <div className='footersection2'>
      <div className="footersection">
        <div className='footer_text'>
        Cosmic prophecies
        </div>
        <div className="foot_msg">In tune with universe</div>

        <div className="contactsfooter">
          <div className="headingfooter">CONTACTS</div>
          <div className="footerelements">
            <a href="https://www.facebook.com/people/CosmicProphecies108/61564309720642/" className='link' target="_blank">Facebook</a><br/>
            <a href="https://www.instagram.com/cosmicprophecies108/" className='link' target="_blank">Instagram</a><br/>
            <a href="https://www.youtube.com/channel/UCwSbGziZg_IB0qkeY4PMo1A" className='link' target="_blank">Youtube</a><br/><br/>
            <a href="mailto:Cosmicprophecies108@gmail.com" className='link' target="_blank">Cosmicprophecies108@gmail.com</a><br/>
            <span>7488949847</span><br/>
          </div>
        </div>

        <div className="developerfooter">
          <div className="headingfooter">DEVELOPER</div>
          <div className="footerelements">
            <a href="https://fusion00.github.io/Social_links/" className='link' target="_blank">Link</a>
          </div>
        </div>

        <div className="servicefooter">
          <div className="headingfooter">SERVICES</div>
          <div className="footerelements">
          <span>Consulting</span><br/>
          <span>Chart  Reading</span><br/>
          <span>Tarot</span><br/>
          <span>Vastu</span><br/>
          </div>
        </div>

        <div className="linksfooter">
          <div className="headingfooter">LINKS</div>
          <div className="footerelements">
          <span onClick={() => handleNavigation('/About')}>About</span><br/>
          <span onClick={() => handleNavigation('/404')}>Blogs</span><br/>
          <span onClick={() => handleNavigation('/404')}>Store</span><br/>
          </div>
        </div>

      </div>



    </div>
  )
}

export default Footer