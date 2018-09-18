// function a(b) {
//   b();
// }

// a(function() {});

// document.querySelector('.container').addEventListener('click', callback);

// function callback() {
//   console.log('body clicked');
// }

const posts = [
  {title: 'Heading one', body: 'This is post one body'},
  {title: 'Heading two', body: 'This is post two body'}
];

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(post => {
//       output += `
//       <li>
//         <strong>${post.title}:</strong> ${post.body}
//       </li>
//       `;
//     });

//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Heading three', body: 'This is post three body'});

// getPosts();


// Using the callback

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
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

createPost({title: 'Heading three', body: 'This is post three body'}, getPosts);


