import React, { useContext } from 'react';
import EbookInfo from '../../sections/ebook/EbookInfo';
import Contact from '../../sections/Contact';
import { motion } from 'framer-motion';
import { NewContext } from '../../context/index';
import SEO from '../../component/Seo';
import { pageAnimation } from '../../utils/animation';

function Ebook() {
  const { firstEnter } = useContext(NewContext);

  return (
    <motion.div
      initial='initial'
      animate={firstEnter ? 'enterInitial' : 'enterNext'}
      exit='exit'
      variants={pageAnimation}
    >
      <SEO
        title='SDT e-book'
        description='Strony dla tlumaczy. Darmowy e-book.'
      />
      <EbookInfo />
      <Contact />
    </motion.div>
  );
}

export default Ebook;
