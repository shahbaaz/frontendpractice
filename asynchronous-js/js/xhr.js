document.getElementById('button').addEventListener('click', getData);

function getData() {
  console.log('loading....');

  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'data.txt', true);

  console.log('READY STATE', xhr.readyState);

  xhr.onreadystatechange = function() {
    console.log('READY STATE', xhr.readyState);
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    }

    if (this.status === 404) {
      console.log('Error...');
    }

 
    //  * HTTP Statuses
    //  * 200: "OK"
    //  * 403: "Forbidden"
    //  * 404: "Not Found"
    //  * 500: "Server Error"
     
  }

  xhr.onprogress = function() {
    console.log('ON PROGRESS READY STATE', xhr.readyState);
  }

  xhr.onload = function() {
    console.log('ON LOAD READY STATE', xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h2>${this.responseText}</h2>`;
    }
  }

  xhr.onerror = function() {
    console.log('Request error...');
  }

  xhr.send();

  /**
   * readyState values
   * 0: request not initialized
   * 1: server connection established
   * 2: request received
   * 3: processing request
   * 4: request finished and response is ready
   */

}