document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternalData);

function getText() {
  fetch('data.txt')
    .then(function(result) {
      // console.log(result.text());
      return result.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(error) {
      console.log(error);
    });
}

function getJSON() {
  fetch('customers.json')
    .then(function(result) {
      // console.log(result.json());
      return result.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(element => {
        output += `<li>${element.id}: ${element.name}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

function getExternalData() {
  fetch('https://api.github.com/users')
    .then(function(res) {
      return res.json();
    })
    .then(function(users) {
      console.log(users);
      let output = '';
      users.forEach(user => {
        output += `
          <div>
            <h3>${user.login}</h3>
            <img src="${user.avatar_url}" width="120px">
            <ul>
              <li>Github URL: <a href="${user.html_url}" target="_blank">${user.html_url}</a></li>
            </ul>
          </div>
        `;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

