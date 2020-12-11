
const showRecipe = recipe => {
  let recipes = recipe.data.recipe;
  let ingredients = recipes.ingredients;

  let image = document.querySelector("#image");
  image.src = recipes.image_url;
  let recipeTitle = document.querySelector("#recipe__title");
  recipeTitle.innerHTML = `<span>${recipes.title}</span>`;
  let minute = document.querySelector(".recipe__info-data--minutes");
  minute.innerHTML = recipes.cooking_time;

  let people = document.querySelector(".recipe__info-data--people");
  people.innerHTML = recipes.servings;
  
  let directions = document.querySelector("#directions");
  directions.href = recipes.source_url;

  let ingList = document.querySelector(".recipe__ingredient-list");
  ingList.innerHTML = "";

let addShoppingList = document.querySelector("#addShoppingList");
let shoppingList = document.querySelector(".shopping__list");


  ingredients.forEach(ing => {
    ingList.innerHTML += `<li class="recipe__item">
    <svg class="recipe__icon">
        <use href="img/icons.svg#icon-check"></use>
    </svg>
    <div class="recipe__count">${ing.quantity ? ing.quantity : ""}</div>
    <div class="recipe__ingredient">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
    </div>
</li>`
    
  })
  
  const addIng = () => {
    shoppingList.innerHTML = "";
    ingredients.forEach(ing => {
      shoppingList.innerHTML += `<li class="shopping__item">
      <div class="shopping__count">
          <input type="number" value="${ing.quantity ? ing.quantity : ""}" step="100">
          <p>${ing.unit}</p>
      </div>
      <p class="shopping__description">${ing.description}</p>
      <button class="shopping__delete btn-tiny">
          <svg>
              <use href="img/icons.svg#icon-circle-with-cross"></use>
          </svg>
      </button>
  </li>`
    })
  }

  addShoppingList.addEventListener("click", addIng)
  console.log(recipes);
};

export default showRecipe
