export class PokeDetail {
  constructor(data) {
    this.id = data.id
    this.forms = data.forms
    this.species = data.species
    this.sprites = data.sprites.back_default
    this.abilities = data.abilities
    this.stats = data.stats
    this.types = data.types
    this.weight = data.weight
    this.moves = data.moves
    this.height = data.height
    this.name = data.name
  }





  get CardTemplate() {
    return /*html*/ `
  <div class="card">
  <kbd class="bg-info">${this.sprites} </kbd>
  <div class="card-body">
  <h3> ${this.name} ${this.types}</h3>
<p class="d-flex align-items-center justify-content-center">
<kbd class="bg-info">






</div>
`
  }

}