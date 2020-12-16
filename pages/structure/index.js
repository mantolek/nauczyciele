import React, { useContext } from 'react';
import StructureInfo from '../../sections/structure/StructureInfo';
import AllStructure from '../../sections/structure/AllStructure';
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
        title='SDT - Struktura strony'
        description='Strony dla tlumaczy. Struktura strony.'
      />
      <StructureInfo />
      <AllStructure />
      <Contact />
    </motion.div>
  );
}

export default index;
