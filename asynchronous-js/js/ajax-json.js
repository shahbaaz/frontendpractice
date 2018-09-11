document.getElementById('getCustomerButton').addEventListener('click', getCustomer);

document.getElementById('getCustomersButton').addEventListener('click', getCustomers);

function getCustomer() {
  // console.log('Get customer');

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      const customer = JSON.parse(this.responseText);
      console.log(customer);
      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  };

  xhr.send();
}

function getCustomers() {
  // console.log('GET CUSTOMERS');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      const customers = JSON.parse(this.responseText);
      console.log(customers);
      let output = ``;

      customers.forEach(customer => {
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
        `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}