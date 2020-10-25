import React from 'react';
import { Link } from 'react-router-dom';

import { PageWrapper, LinkImage } from './style';

const Home = () => {
  return ( 
    <PageWrapper>
      <Link to='/employees'>
        <LinkImage src='https://img.r7.com/images/carteira-de-trabalho-03102019174705039?dimensions=660x360'/>
      </Link>

      <Link to='/pokemons'>
        <LinkImage src='https://s2.glbimg.com/JgoPrTkJFeFTCMhK2PL3vkOghnU=/850x446/s2.glbimg.com/MvfOufH0YWUQ_Udt-iTmeZu05dw=/695x0/s.glbimg.com/po/tt2/f/original/2016/03/16/pokemon-lendarios-articuno-zapdos-moltres.jpg' />
      </Link>
    </PageWrapper>
  );
}
 
export default Home;