import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const pageAnimation = {
  initial: {
    opacity: 0,
  },
  enterInitial: {
    opacity: 1,
    transition: { duration: 1, delay: 1.5 },
  },
  enterNext: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

export const showTitle = (element) => {
  return ScrollTrigger.batch(element, {
    start: 'top +645px',
    onEnter: (batch) =>
      gsap.to(batch, {
        scrollTrigger: {
          trigger: element,
        },
        x: '-100%',
        duration: 1,
        overwrite: true,
        // ease: 'Power2.easeOut',
      }),
    onLeave: (batch) =>
      gsap.to(batch, {
        x: '0%',
        duration: 1,
        overwrite: true,
        // ease: 'Power2.easeOut',
      }),
    onEnterBack: (batch) =>
      gsap.to(batch, {
        x: '-100%',
        duration: 1,
        overwrite: true,
        // ease: 'Power2.easeOut',
      }),
    onLeaveBack: (batch) =>
      gsap.to(batch, {
        x: '0%',
        duration: 1,
        overwrite: true,
        // ease: 'Power2.easeOut',
      }),
  });
};

export const showBox = (element) => {
  ScrollTrigger.batch(element, {
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        stagger: 0.15,
        overwrite: true,
      }),
    onLeave: (batch) =>
      gsap.set(batch, {
        opacity: 0,
        overwrite: true,
      }),
    onEnterBack: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        stagger: 0.15,
        overwrite: true,
      }),
    onLeaveBack: (batch) =>
      gsap.set(batch, {
        opacity: 0,
        overwrite: true,
      }),
  });
  ScrollTrigger.addEventListener('refreshInit', () =>
    gsap.set(element, { opacity: 0 })
  );
};
