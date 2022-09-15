export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.url = data.url

  }



  get ListTemplate() {
    return /*html*/`
<div class="">
<h5 class="mb-0 selectable" onclick="app.><b>${this.name}</b></h5>
</div>`






  }


}