import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { List, PageWrapper, Arrow } from './style';

import Loading from '../../components/Loading';

import Card from '../../components/Card';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(0);

  const getPokemons = async () => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`);
    
    const mapedInformation = data.results.map((pokemon) => ({ name: pokemon.name, id: pokemon.url }));

    setPokemon(mapedInformation);
    setIsLoading(false)
  }

  useEffect(() => {
    getPokemons();
    setIsLoading(true);
  }, [page]);

  return (
    <PageWrapper>
     {isLoading ? <Loading /> : (<List>
        {pokemon.map((each) => (
          <Card key={each.id} title={each.name}/>
        ))}
      </List> )}
      <Arrow onClick={() => {
        if (page !== 0){
          setPage(page - 20);
        }
      }}>&#60;</Arrow>
      <Arrow onClick={() => setPage(page + 20)}>&#62;</Arrow>
    </PageWrapper>
  );
}
 
export default Pokemon;