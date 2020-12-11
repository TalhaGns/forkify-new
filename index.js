import renderResult from "./searchView.js"

// Page Elements
const input = document.querySelector('.search__field');
const submitBtn = document.querySelector('.search__btn');
const apiKey = "759b5ee2-62dd-4744-ac60-e0e6621b1e37";
const url = "https://forkify-api.herokuapp.com/api/v2/recipes";
let deleteItem = document.querySelector(".shopping__list");



// Add AJAX functions here:
const getRecipe = async () => {
    const recipeInput = input.value;
    const urlToFetch = `${url}?search=${recipeInput}&key=${apiKey}`;
    try{
     const response = await fetch(urlToFetch);
     if(response.ok){
         let jsonResponse = await response.json();
        //  console.log(jsonResponse);
         renderResult(jsonResponse);
     }

    } catch(err)
    {
      console.log(err)  
    }

    }




submitBtn.addEventListener("click", getRecipe);

deleteItem.addEventListener("click", (e) => {
if(e.target.closest("button")) {
    e.target.closest("button").parentElement.remove();
}
})

const newSearch = () => {
    input.value = "";
    document.querySelector(".results__list").innerHTML = ""
    document.querySelector(".results__pages").hidden = true
}


input.addEventListener("click", newSearch)
