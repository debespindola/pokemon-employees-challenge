import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { List, PageWrapper } from './style';

import Loading from '../../components/Loading';

import Card from '../../components/Card';

const Pokemon = () => {
  const [image, setImage] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemons = async () => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const mapedInformation = data.results.map((pokemon) => ({ name: pokemon.name, id: pokemon.url }));

    setPokemon(mapedInformation);
    setIsLoading(false)
  }

  useEffect(() => {
    getPokemons();
    setIsLoading(true);
  }, []);

  return (
    <PageWrapper>
     {isLoading ? <Loading /> : (<List>
        {pokemon.map((each) => (
          <Card key={each.id} title={each.name}/>
        ))}
      </List> )}
    </PageWrapper>
  );
}
 
export default Pokemon;