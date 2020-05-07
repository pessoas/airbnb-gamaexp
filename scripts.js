
window.onload = async () => {
  const resposta = await fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')

  const dados = await resposta.json();

  let names = await dados.map(dados => `<li>${dados.name}</li>`)
  console.log(names)

  let nomes = names.toString().replace(/\,/g, "");
  console.log(nomes);

  dados.forEach(element => {
    console.log(element);
    let number = 1;
    /*
    if(number == 4) {
      document.getElementById('colunas').innerHTML += `<div class="w-100"></div>`;
      number = 1;
    } else {
      document.getElementById('colunas').innerHTML += `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${element.photo}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${element.property_type}</h5>
            <p class="card-text">${element.name}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    `
    number++;
    }*/
    document.getElementById('colunas').innerHTML += `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${element.photo}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${element.property_type}</h5>
            <p class="card-text">${element.name} <br>Valor da diária: ${element.price}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    `
  });
  
}
