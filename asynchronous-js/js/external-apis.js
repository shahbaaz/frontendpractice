document.getElementById('getPlanetButton').addEventListener('click', getData);


function getData(event) {
  event.preventDefault();
  console.log('Get data');
  const planetNumber = document.querySelector('#planetNumber').value;
  console.log('PLANET NUMBER', planetNumber);
  const xhr = new XMLHttpRequest();


  xhr.open('GET', `https://swapi.co/api/planets/${planetNumber}/`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      const planet = JSON.parse(this.responseText);
      const output = `
        <div>
          <h2>Planet ${planet.name} Info</h2>
          <ul>
            <li>Diameter: ${planet.diameter}</li>
            <li>Gravity: ${planet.gravity}</li>
            <li>Population: ${planet.population}</li>
            <li>Climate: ${planet.climate}</li>
            <li>Terrain: ${planet.terrain}</li>
          </ul>
        </div>
      `;

      document.getElementById('output').innerHTML = output;
    }
    
    if (this.status === 404) {
      const output = `<h2>PLANET NOT FOUND!</h2>`;
      document.getElementById('output').innerHTML = output;
    }
  };

  xhr.onerror = function() {
    console.log('Request error...');

  }

  xhr.send();
}