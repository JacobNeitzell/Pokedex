import { appState } from "../AppState.js"
import { pokemonsService } from "../Services/PokemonsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawPokemon() {
  let template = ''
  appState.pokemon.forEach(p => template += p.ListTemplate)
  setHTML('Pokemon', template)
}








export class PokemonsController {
  constructor() {
    appState.on('pokemon', _drawPokemon)
    this.getPokemon()



  }
  async getPokemon() {
    try {
      await pokemonsService.getPokemon()
    } catch (error) {
      console.error('[getPokemon]', error)
      Pop.error(error)
    }
  }




}