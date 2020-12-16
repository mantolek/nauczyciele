import React, { useState } from 'react';
import { validateEmail } from '../../utils/validation';

function GetEbook() {
  const [emailEbook, setEmailEbook] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [processing, setProcessing] = useState(false);

  const submitEbook = (e) => {
    e.preventDefault();

    if(!validateEmail(setError, emailEbook, setProcessing)) return

    fetch(`/api/ebook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailEbook }),
    })
      .then(() => {
        setProcessing(false)
        setEmailEbook('');

        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 2000);
      })
      .catch((error) => console.error(error))
  };
  return (
    <div className='getBook__container'>
      <div className='getBook__wrapper'>
        <div className='getBook__box'>
          {processing && <div className='form_loader_container'>
            <div className='form_loader' />
          </div>}
          <form onSubmit={(e) => submitEbook(e)}>
            {error && (
              <p className='getBook__error' style={{ color: 'red' }}>
                Proszę podaj poprawny e-mail.
              </p>
            )}
            {sent && (
              <p className='getBook__ok' style={{ color: 'green' }}>
                E-book pobrany. Dziękujemy.
              </p>
            )}
            <input
              type='text'
              onChange={(e) => {
                setEmailEbook(e.target.value), setError(false);
              }}
              value={emailEbook}
              placeholder='Podaj swoj adres e-mail'
            />
            <input type='submit' value='Zdobadz e-book' className='button' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetEbook;
