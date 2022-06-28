const header = document.querySelector("header");
const section = document.querySelector("section");

let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

let request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";

request.send();

request.onload = function() {
   let superHeroes = request.response;
   populateHeader(superHeroes);
   showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
   let myH1 = document.createElement("h1");
   myH1.textContent = jsonObj["squadName"];
   header.appendChild(myH1);

   let myPara = document.createElement("p");
   myPara.textContent = "Hometown: " + jsonObj["homeTown"] + "// Formed: " + jsonObj["formed"];
   header.appendChild(myPara);
}

function showHeroes(jsonObj) {
   let heroes = jsonObj["members"];

   for (let i = 0; i < heroes.length; i++) {

      let myArticle = document.createElement("article");
      let myh2 = document.createElement('h2');
      let mypara1 = document.createElement("p");
      let mypara2 = document.createElement("p");
      let mypara3 = document.createElement("p");
      let myList = document.createElement("ul"); 

      myh2.textContent = heroes[i].name;
      mypara1.textContent = "Secret indetify: " + heroes[i].secretIndetify;

      mypara2.textContent = "Age: " + heroes[i].age;

      mypara3.textContent = "Superpowers: ";

      let superPowers = heroes[i].powers;

      for(let j = 0; j < superPowers.length;j++) {
         let listItem = document.createElement("li");
         listItem.textContent = superPowers[j];
         myList.appendChild(listItem);
      }
      myArticle.appendChild(myh2);
      myArticle.appendChild(mypara1);
      myArticle.appendChild(mypara2);
      myArticle.appendChild(mypara3);
      myArticle.appendChild(myList);
      
      section.appendChild(myArticle);
   }
}
