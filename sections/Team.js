import React, { useEffect } from 'react';
import { showTitle } from '../utils/animation'

function Team() {
  useEffect(() => {
    showTitle('.t-main__two .mark__black')
  }, []);

  return (
    <div className='team__container' id='team'>
      <div className='team__wrapper'>
        <div className='team__box'>
          <h2 className='main__two t-main__two'><span className='mark__black'></span>O nas</h2>
        </div>

        <div className='team__story'>
          <p>Historia firmy SDT sięga lat wczesnego dzieciństwa. </p>
          <p>
            Własciciele Marcin i Dawid znają się juz od ponad 20 lat a od 3 lat
            działają wspoólnie przy realizacji różnych projektów z zakresu IT w
            tym kryptowalut.
          </p>
          <p>
            Cały zamysł współpracy jak i pomysł stworzenia Wirtualnych
            Wizytówek okazał się strzałem w dziesiątkę, gdyż w idealnym momencie
            zaczał on zapełniać lukę na rynku, która powstała po wieloletniej
            złej praktyce tworzenia strony internetowych.
          </p>
          <br />
          <p>
            Nasze siedziby znajdują się w Poznaniu, Szczecinie, Glasgow
            (Szkocja) i Antwerpii (Belgia).
          </p>
          <p></p>
        </div>

        <div className='team__people'>
          <div className='team__person'>
            <img
              src='./people.png'
              alt='Marcin photo'
              className='team__photo '
            />
            <div className='team__info'>
              <h3 className='bg-color-red'>Marcin</h3>
              <p>
                Twórca pomysłu, programista z wieloletnim doświadczeniem,
                absolwent filologii angielskiej i zagorzały praktykant sportów
                walki.
              </p>
              <p>
                Zajmuje się UX/UI strony; w tym animacjami, dynamicznością i
                płynnością ruchu strony.
              </p>
              <p>
                Pomimo treningów każdego dnia, jest do Państwa dyspozycji
                24 godziny na dobę, 7 dni w tygodniu.
              </p>
            </div>
          </div>
          <div className='team__person team__person-right'>
            <img
              src='./people2.png'
              alt='Dawid photo'
              className='team__photo team__photo-right'
            />
            <div className='team__info team__info-right'>
              <h3 className='bg-color-red'>Dawid</h3>
              <p>
                Prawa ręka Marcina. Odpowiedzialny za strukturę kodu, bazy
                danych, poprawne SEO i narzędzia Google.
              </p>
              <p>
                Na swoim koncie ma juz 6 lat doświadczenia w pisaniu kodu. Zna
                ponad 10 różnych jezyków programowania.
              </p>
              <p>
                W wolnym czasie gra na perkusji i wzbogaca swoją wiedzę na temat
                kryptowalut.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='team__elementy'>
        <span class='sport-icon flag-pl'></span>
        <span class='sport-icon flag-pl'></span>
        <span class='sport-icon flag-pl'></span>
        <span class='sport-icon flag-pl'></span>
        <span class='sport-icon flag-pl'></span>
        <span class='sport-icon flag-pl'></span>
      </div>
    </div>
  );
}

export default Team;