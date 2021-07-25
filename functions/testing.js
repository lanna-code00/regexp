import {Searchfunction} from "./searchfunction.js";
const newsearch = new Searchfunction();

let jsonusers = [];

let searchthrougharray = () => {
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    json.map((el) =>{
      displayUsers(newsearch.arraySearcher(document.getElementById("searcher").value, json));
    })
  })

};

const loadUsers = async () => {
  try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      jsonusers = await res.json();
      displayUsers(jsonusers);
  } catch (err) {
      console.error(err);
  }
};

loadUsers();

const displayUsers = (users) => {
  let displays;
      users.map((user) => {
        displays += `
      <div class="col-md-4" >
      <div class="card shadow-sm p-4">
         <h5>${user.username}</h5>
         <h6>${user.name}</h6>
      </div>
        </div>`;
      })
      displayusers.innerHTML = displays;
};

searcher.addEventListener('keyup', searchthrougharray)
