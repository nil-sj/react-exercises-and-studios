import recipeData from "./recipe.json";

function IngredientList() {
  
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {recipeData[0].ingredients.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 