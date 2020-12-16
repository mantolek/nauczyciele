import React, { useState } from 'react';
import { MalyTriangle, Krezka, Krezka2, InnyTriangle } from '../svg/Svg';
import { validateEmail } from '../utils/validation';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [processing, setProcessing] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if(!validateEmail(setError, email, setProcessing)) return

    fetch(`/api/email`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, name: name, msg: msg }),
    }).then(() => {
      setName('');
      setEmail('');
      setMsg('');
      setProcessing(false)

      setSent(true);
      setTimeout(() => {
        setSent(false);
      }, 2000);
    }).catch(error => console.error(error));
  };

  return (
    <div className='contact__container' id='contact'>
      <div className='contact__wrapper'>
        <div className='contact__box'>
          {processing && <div className='form_loader_container'>
            <div className='form_loader' />
          </div>}
          <form onSubmit={(e) => submit(e)}>
            {error && (
              <p className='getBook__error' style={{ color: 'red' }}>
                Proszę podaj poprawny e-mail.
              </p>
            )}
            {sent && (
              <p className='getBook__ok' style={{ color: 'green' }}>
                E-mail wysłano. Dziękujemy.
              </p>
            )}
            <input
              placeholder='Imie'
              type='text'
              onChange={(e) => setName(e.target.value)}
              name='name'
              value={name}
            />
            <input
              placeholder='Podaj swój adres e-mail'
              type='text'
              onChange={(e) => setEmail(e.target.value)}
              name='email'
              value={email}
            />
            <textarea
              placeholder='Wiadomosc'
              type='text'
              rows='8'
              onChange={(e) => setMsg(e.target.value)}
              name='msg'
              value={msg}
            />
            <input type='submit' value='Wyślij' className='button' />
          </form>
          <div className='contact__text'>
            <h2>Zyski zaczynają się od kontaktu</h2>
            <p>Dokładnie omówimy cały plan i ustalimy wszystkie szczegóły.</p>
            <br />
            <p>
              Wspólnie uda nam się osiągnąć cel a Twoja firma pozyska świetną
              stronę.
            </p>
            <br />
            <p>Pierwszy krok należy do Ciebie.</p>
            <p>My zajmiemy się resztą.</p>
            <h3>strony.dla.tlumaczy@gmail.com</h3>
          </div>
        </div>
      </div>

      {/* Elementy */}
      <div className='contact__elementy'>
        <MalyTriangle />
        <Krezka />
        <Krezka2 />
        <InnyTriangle />
      </div>
    </div>
  );
}

export default Contact;
