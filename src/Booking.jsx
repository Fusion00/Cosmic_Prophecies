import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Booking = () => {
  const [Name, setName] = useState('');
  const [Place, setPlace] = useState('');
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const [Email, setEmail] = useState('');
  const [Num, setNum] = useState('');
  
  const [flag, showflag] = useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
    if (!Name || !Place || !Date || !Time || !Email || !Num) {
      alert('All fields are required.');
      return;
    }
    showflag(true);

    const serviceId = 'service_vskjutg';
    const templateId = 'template_ru0ap4i';
    const publicKey = 'yZ7kQ2djMy8tDciW7';

    const templateParams = {
        from_name : Name,
        from_email : Email,
        to_name : 'Nivedita',
        place : Place,
        date : Date,
        time : Time,
        num : Num,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response)=> {
        console.log('SUCCESS!', response);
        setName('');
        setEmail('');
        setPlace('');
        setDate('');
        setTime('');
        setNum('');
    })
    .catch((error)=> {
        console.log('error send', error);
    });

}


  return (
    <div className="bookings">
      <div className="bookings2">Talk To Astrologer</div>
      <hr className="bookingsline" />
      <div className="bookingsform">
        <form>
          <input
            type="text"
            className="Bookinput"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="Bookinput"
            placeholder="Place of Birth"
            value={Place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <input
            type="date"
            className="Bookinput"
            placeholder="Date of Birth"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            step="1"
            className="Bookinput"
            placeholder="Time of Birth"
            value={Time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input
            type="email"
            className="Bookinput"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            className="Bookinput"
            placeholder="Phone No"
            value={Num}
            onChange={(e) => setNum(e.target.value)}
          />
        </form>
      </div>

      <button className="bookingsbutton" onClick={handleSubmit}>Schedule meeting</button>
      {flag && <div className="flag">
            you will receive a meeting link in your email........Good luck!
          </div>}
    </div>
  );
};

export default Booking;
