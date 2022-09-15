import { PokemonsController } from "./Controllers/PokemonsControllers.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  pokemonController = new PokemonsController()


}

window["app"] = new App();
