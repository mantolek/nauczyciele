import React, { useEffect } from 'react';
import { Elipze, ArrowDown, EbookImg } from '../../svg/Svg';
import GetEbook from './GetEbook';
import Link from 'next/link';
import { showTitle } from '../../utils/animation'

function EbookInfo() {
  useEffect(() => {
    showTitle('.ebook__text h2 span')
  }, []);
  
  return (
    <div className='ebookInfo__container'>
      <div className='logo'>
        <Link href='/'>
          <img src='./logo.png' alt='logo' />
        </Link>
      </div>
      <div className='ebookInfo__wrapper'>
        <div className='ebookInfo__box'>
          <h1>
            E-BOOK <Elipze />
          </h1>
          <div className='arrov_dovn'>
            <ArrowDown />
          </div>
        </div>

        <div className='ebook__manage'>
          <div className='ebook__image'>
            {/* <img src='./ebook.png' alt='Ebook image' /> */}
            <EbookImg />
          </div>
          <div className='ebook__text'>
            <h2><span className='mark__black'></span>Content Marketing i Social Media</h2>
            <p>
              {' '}
              Zbiór najlepszych zasad dotyczących tworzenia contentu
              marketingowego, social media i sposobów na zdobycie większej
              ilości klientów.
            </p>
            <br />
            <p>
              Twórca E-booka Pan Michał Moneta od lat zajmuje się zagadnieniamy
              dotyczącymi marketingu. Jest to jego kolejna publikacja w której
              znajdą Państwo dużo wartościowych wskazówek i informacji.{' '}
            </p>

            <GetEbook />
          </div>
        </div>
      </div>
      <img src='./tlooo.png' className='ebookInfo__tlo' />
    </div>
  );
}

export default EbookInfo;
