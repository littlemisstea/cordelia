import axios from 'axios';

export async function getPokemon(pokemonId: number): Promise<any> {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
