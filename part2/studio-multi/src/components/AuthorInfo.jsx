import recipeData from "./recipe.json";
import "./styling.css";

function AuthorInfo() {

  const recipeAuthor = <div>{recipeData[0].author}</div>;
  const recipeAuthorImage = <img src={recipeData[0].authorImage} className={'authorImage'} />;
  const recipeWebsite = <a href={recipeData[0].website}>Author Website</a>;

  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
}

export default AuthorInfo;

//import styles.css
//import json file for author info
//image, name, website
//css for styling image
