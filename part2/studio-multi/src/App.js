import "./App.css";
import RecipeCard from "./components/RecipeCard.jsx";
import recipeData from "./components/recipe.json";

export default function App() {
  return (
    <>
      <h1 className="pageHeading">My Recipes</h1>
      <div className="cardsContainer">
        {recipeData.map((eachRecipeData, index) => <RecipeCard key={index} data={eachRecipeData} />)}
      </div>
    </>
  );
}
