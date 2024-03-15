import "./styling.css";

function RecipeImage(props) {
   return (
    <div>
      <img src={props.imageUrl} alt={props.alt} className="recipeImage" />
    </div>
   );
}
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 