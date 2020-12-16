import React, { useEffect } from 'react';
import { general, seo, media, special, effects, recommendation } from './data';
import { Good, Bad } from '../../svg/Svg';
import { showTitle, showBox } from '../../utils/animation'

function AllSteps() {
  useEffect(() => {
    showTitle('.gi-main__two .mark__black')
   
    let allGeneralBoxes = document.querySelectorAll(
      '.g-step__wrapper .steps_box'
    );
    let allEOBoxes = document.querySelectorAll('.s-step__wrapper .steps_box');
    let allMediaBoxes = document.querySelectorAll(
      '.m-step__wrapper .steps_box'
    );
    let allPecialBoxes = document.querySelectorAll(
      '.ss-step__wrapper .steps_box'
    );
    let allEffBoxes = document.querySelectorAll('.e-step__wrapper .steps_box');
    let allRecomBoxes = document.querySelectorAll(
      '.r-step__wrapper .steps_box'
    );

    showBox(allGeneralBoxes)
    showBox(allEOBoxes)
    showBox(allMediaBoxes)
    showBox(allPecialBoxes)
    showBox(allEffBoxes)
    showBox(allRecomBoxes)
  }, []);

  return (
    <div className='allSteps__container'>
      <div className='allSteps__wrapper'>
        <div className='allSteps__box'>
          <h2 className='main__two gi-main__two'>
            <span className='mark__black'></span>Wszystkie kroki
          </h2>
          <p>Ponizej za i przeciw kazdej opcji</p>
        </div>
      </div>

      <div className='allSteps__info'>
        <div className='step__container'>
          {/* Info */}
          <div className='step__wrapper'>
            <p className='step__title'>Podstawa</p>
            <div className='step g-step__wrapper'>
              {general.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 1}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 1}`} />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* End of Info */}

          {/* SEO */}
          <div className='step__wrapper'>
            <p className='step__title'>SEO</p>
            <div className='step s-step__wrapper'>
              {seo.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 12}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 12}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* media */}
          <div className='step__wrapper'>
            <p className='step__title'>Media</p>
            <div className='step m-step__wrapper'>
              {media.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 21}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 21}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* special */}
          <div className='step__wrapper'>
            <p className='step__title'>Specjaly</p>
            <div className='step ss-step__wrapper'>
              {special.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 27}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 27}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* effects */}
          <div className='step__wrapper'>
            <p className='step__title'>Efekty</p>
            <div className='step e-step__wrapper'>
              {effects.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 33}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 33}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* recommendation */}
          <div className='step__wrapper'>
            <p className='step__title'>Nasza Rekomendacja</p>
            <div className='step r-step__wrapper'>
              {recommendation.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 58}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 58}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllSteps;
