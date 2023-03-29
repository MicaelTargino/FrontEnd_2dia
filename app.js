// pegar Api
let dados;
function consumeApi() {
  fetch('https://randomuser.me/api/?results=10')
  .then(result => result.json())
  .then((data) => {
    printInScreen(data.results);
    console.log(data.results);
  });
  
};
function printInScreen(array) {
  for(const u in array) {
    //creation of div.user
    const divUser = document.createElement('div');
    divUser.classList.add('user');

        //creation of div.img
        const divImg = document.createElement('div');
        divImg.classList.add('img')

            //creation of img
            const img = document.createElement('img');
            img.src = array[u].picture.large;
            img.width = '158';
            img.height = '158';

        //creation of div.description
        const divDescription = document.createElement('div');
        divDescription.classList.add('description');

            //creation of h2
            const h2 = document.createElement('h2');
            h2.innerText = `My name is ${array[u].name.first} ${array[u].name.last}`;

            //creation of p 
            const p = document.createElement('p');
            p.innerText = array[u].email;


      //set inheritness
      document.querySelector('div#users').appendChild(divUser);
      divUser.appendChild(divImg);
      divImg.appendChild(img);
      divUser.appendChild(divDescription);
      divDescription.appendChild(h2);
      divDescription.appendChild(p);

  }


};
consumeApi();
// onload, chamar ambas as funçoes