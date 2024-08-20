import React from 'react';
import { useNavigate } from 'react-router-dom';

const Appbar = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
};

const scrolldown = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight, // Scroll to the bottom of the page
    behavior: 'smooth', // Smooth scrolling
  });
};
  return (
    <div className='Appbar2'>
      <div className='Appbar'>
        <div style={{    position: 'relative', left: '67px', width: '529px'}}>
        <button className='AppButton' onClick={() => handleNavigation('/')}>Home</button>
        <button className='AppButton' onClick={() => handleNavigation('/About')}>About</button>
        <button className='AppButton' onClick={() => handleNavigation('/404')}>Blog</button>
        <button className='AppButton' onClick={() => handleNavigation('/404')}>Store</button>
        <button className='AppButton' onClick={scrolldown}>Contacts</button>
        </div>

      </div>
    </div>
    
  );
}

export default Appbar;
