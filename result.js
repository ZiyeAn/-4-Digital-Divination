document.addEventListener('DOMContentLoaded',fetchDrinkData);
const baseLiquorChoice=localStorage.getItem("baseLiquor")
console.log(baseLiquorChoice);
const categoryChoice=localStorage.getItem("Category")
console.log(categoryChoice);

const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${baseLiquorChoice}`;
const apiUrl2 = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryChoice}`;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

async function fetchDrinkData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const id = data.drinks[getRandomInt(20)].idDrink
        console.log(id);
        fetchDetailData(id)
        //displayData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
async function fetchDetailData(id) {
    try {
        const detaillUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await fetch(detaillUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Or process the data in any way you need
        displayData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }

}
function displayData(drinkData) {
  const cocktailDiv = document.getElementById('cocktail');
  const name = drinkData.drinks[0].strDrink;
  const ingredient1= drinkData.drinks[0].strIngredient1;
  const ingredient2= drinkData.drinks[0].strIngredient2;
  const ingredient3= drinkData.drinks[0].strIngredient3;
  const ingredient4= drinkData.drinks[0].strIngredient4;
  const instruciton= drinkData.drinks[0].strInstructions; 
  cocktailDiv.innerHTML = `<p>name: ${name} <br>ingredients: ${ingredient1}, ${ingredient2}, ${ingredient3}, ${ingredient4} <br>instruciton:${instruciton}</p>`;
}


