/**
 * Promise: Success or Failure
 * resolve or reject
 */

//  const myPromise = new Promise(function(resolve, reject) {
//   // some code 
//   const error = false;
//   const successData = 'success data';
//   const errData = 'error data';
//   if (!error) {
//     resolve(successData);
//   } else {
//     reject(errData);
//   }
//  });

//  console.log(typeof myPromise);

//  myPromise.then(function(data) {
//    console.log(data);
//    return data + ' new data added';
//  }).then(function(newData) {
//    console.log(newData);
//  }).catch(function(err) {
//    console.log(err);
//  });


const posts = [
  {title: 'Heading one', body: 'This is post one body'},
  {title: 'Heading two', body: 'This is post two body'}
];


function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      // posts.push(post);
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject('Error: something not working');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(post => {
      output += `
      <li>
        <strong>${post.title}:</strong> ${post.body}
      </li>
      `;
    });

    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Heading three', body: 'This is post three body'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
  document.body.innerHTML = `<h2 style="color:red;">${err}</h2>`;
});