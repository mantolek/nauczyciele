import React, { useContext } from 'react';
// import Link from 'next/link';
// import { Link } from '../i18n'
// import { withTranslation } from '../i18n';
import SEO from '../component/Seo';
import { motion } from 'framer-motion';
import Welcome from '../sections/Welcome';
import GeneralInfo from '../sections/GeneralInfo';
import Offer from '../sections/Offer';
import Price from '../sections/Price';
import Team from '../sections/Team';
import Contact from '../sections/Contact';
import { NewContext } from '../context/index';
import { pageAnimation } from '../utils/animation';

// const Home = ({ t }) => {
const Home = () => {
  const { firstEnter } = useContext(NewContext);

  return (
    <motion.div
      initial='initial'
      animate={firstEnter ? 'enterInitial' : 'enterNext'}
      exit='exit'
      variants={pageAnimation}
    >
      <SEO
        title='SDT - home'
        description='Strony dla tlumaczy. Strona glowna.'
      />
      <Welcome />
      <GeneralInfo />
      <Offer />
      <Price />
      <Team />
      <Contact />
    </motion.div>
  );
};

// Home.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'footer'],
// });

// export default withTranslation('common')(Home);
export default Home;
