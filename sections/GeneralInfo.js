import React, { useEffect } from 'react';
import { showTitle } from '../utils/animation'

function GeneralInfo() {
  useEffect(() => {
    showTitle('.g-main__two .mark__black')
  }, []);

  return (
    <div className='generalInfo__container'>
      <div className='generalInfo__wrapper'>
        <div className='generalInfo__box'>
          <h2 className='main__two g-main__two'>
            <span className='mark__black'></span>PROBLEM JAKI ROZWIĄZUJEMY
          </h2>
          <p>
            Dzięki 3 letniej obserwacji poprawnego budowania stron, a także tego
            jak nie powinny byc one twrzone,{' '}
            <span style={{ fontWeight: '700' }}>udało</span> nam się stworzyć
            idealne rozwiązanie na Państwa potrzeby.
          </p>
          <p>
            Struktura strony internetowej, którą nazwaliśmy{' '}
            <span className='bg-color-red'>
              Interaktywną Wizytówką
            </span>
            , została dostosowana do wymogów{' '}
            <span style={{ fontWeight: '700' }}>Google z roku 2020</span> a
            takze zmodyfikowana tak, by spełniała wszystkie niezbędne elementy,
            o ktorych mogą Państwo sie dowiedzieć{' '}
            <a href='#offer' style={{ textDecoration: 'underline' }}>
              poniżej
            </a>
            .
          </p>
          <br />
          <p>
            Naszym celem jest sprawić by{' '}
            <span style={{ fontWeight: '700' }}>Państwa firma</span> wskoczyła
            do
            <span style={{ fontWeight: '700' }}> TOP</span> najlepszych firm w
            mieście.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
