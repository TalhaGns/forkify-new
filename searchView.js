import showRecipe from "./recipeView.js"

const apiKey = "759b5ee2-62dd-4744-ac60-e0e6621b1e37";
const url = "https://forkify-api.herokuapp.com/api/v2/recipes";

const renderResult = recipe => {

  document.querySelector(".results__pages").hidden = false
 const results = document.querySelector(".results__list");
 let names = recipe.data.recipes;
 results.innerHTML = "";
 names.forEach(name => {
 results.innerHTML += `
 <li>
 <a id="${name.id}" class="results__link results__link--active" href="#23456">
     <figure class="results__fig">
         <img src="${name.image_url}" alt="Test">
     </figure>
     <div class="results__data">
         <h4 class="results__name">${name.title.split(" ").slice(0, 5).join(" ")}</h4>
         <p class="results__author">${name.publisher}</p>
     </div>
 </a>
</li>
 
 `
 })    
 let myA = document.getElementsByTagName("a"); 
 for(let i = 0; i < myA.length; i++) {
     myA[i].addEventListener("click", () => {
     let id = myA[i].id;
    getOneRecipe(id);
     })
 }

};
const getOneRecipe = async (id) => {
  let urlToFetch =`${url}/${id}?key=${apiKey}`
  
  fetch(urlToFetch).then(response => response.json()).then(data => showRecipe(data)).catch(err => console.log(err))
  }
export default renderResult
