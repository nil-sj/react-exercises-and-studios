import React from "react";
import RecipeImage from "./RecipeImage";
import RecipeName from "./RecipeName";
import RateARecipe from "./RateARecipe";
import Button from "./Button";
import AuthorInfo from "./AuthorInfo";
import IngredientList from "./Ingredients";
import "./styling.css";

function RecipeCard(props) {
  return (
    <div className="card">
      <RecipeImage imageUrl={props.data.recipeImage} alt={props.data.RecipeName} />
      <RecipeName name={props.data.name} description={props.data.description} />
      <RateARecipe rating={Math.ceil(Math.random()*5)} />
      <Button saveButton={[true,false][Math.round(Math.random())]} />
      <AuthorInfo name={props.data.author} link={props.data.website} profilePic={props.data.authorImage} />
      <IngredientList ingredients={props.data.ingredients} />
    </div>
  )
}

export default RecipeCard;