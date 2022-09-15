import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { PokemonServer } from "./AxiosService.js";

export class PokemonsService {

  async getPokemon() {
    const res = await PokemonServer.get('api/v2/pokemon')
    console.log(res.data);
    appState.pokemon = res.data.results.map(p => new Pokemon(p))



  }

}
export const pokemonsService = new PokemonsService()