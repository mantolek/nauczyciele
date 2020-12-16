import React, { useContext } from 'react';
import StepsInfo from '../../sections/steps/StepsInfo';
import AllSteps from '../../sections/steps/AllSteps';
import Contact from '../../sections/Contact';
import { motion } from 'framer-motion';
import { NewContext } from '../../context/index';
import SEO from '../../component/Seo';
import { pageAnimation } from '../../utils/animation';

function index() {
  const { firstEnter } = useContext(NewContext);

  return (
    <motion.div
      initial='initial'
      animate={firstEnter ? 'enterInitial' : 'enterNext'}
      exit='exit'
      variants={pageAnimation}
    >
      <SEO
        title='SDT - 60 krokow'
        description='Strony dla tlumaczy. 60 krokow.'
      />
      <StepsInfo />
      <AllSteps />
      <Contact />
    </motion.div>
  );
}

export default index;
