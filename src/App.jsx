import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import headerImgMobile from './assets/images/illustration-sign-up-mobile.svg';
import headerImgDesktop from './assets/images/illustration-sign-up-desktop.svg'
import checkIcon from './assets/images/icon-list.svg';
import bigIcon from './assets/images/icon-success.svg';
function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [confirmation, setConfirmation] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState();

  const onSubmit = (data) => {
    setConfirmation(true);
    const email = data.email;
    setRegisteredEmail(email);
  };

  function handleClick() {
    setConfirmation(false);
  }

  return (
    <>
      <div className="container">
        {!confirmation ? (
          <>
            <div className="top">
              <img src={headerImgMobile} className='mobile' alt="Sign-up illustration" />
              <img src={headerImgDesktop} className='desktop' alt="Sign-up illustration" />
            </div>
            <div className="bottom">
              <h1>Stay updated!</h1>
              <p className="subtitle">Join 60,000+ product managers receiving monthly updates on:</p>
              <ul>
                <li>
                  <img src={checkIcon} width={20} height={20} alt="Checkmark icon" />
                  <p>Product discovery and building what matters</p>
                </li>
                <li>
                  <img src={checkIcon} width={20} height={20} alt="Checkmark icon" />
                  <p>Measuring to ensure updates are a success</p>
                </li>
                <li>
                  <img src={checkIcon} width={20} height={20} alt="Checkmark icon" />
                  <p>And much more!</p>
                </li>
              </ul>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="email-container">
                  <div className="labels">
                  <label htmlFor="email-address">Email address</label>
                  {errors.email && <label htmlFor="email-address" className='red'>{errors.email.message}</label>}
                  </div>
                  <input
                    id="email-address"
                    placeholder="email@company.com"
                    className={errors.email ? 'input-error' : ''}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                </div>
                <button type="submit">Subscribe to monthly newsletter</button>
              </form>
            </div>
          </>
        ) : (
          <>
          <div className="success-message">
            <img src={bigIcon} alt="" />
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <b>{registeredEmail}</b>.
            Please open it and click the button inside to confirm your subscription.</p>
          <div className="button-container">
            <button className='subscribing-button' onClick={handleClick}>Dismiss message</button>
          </div>
          </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
