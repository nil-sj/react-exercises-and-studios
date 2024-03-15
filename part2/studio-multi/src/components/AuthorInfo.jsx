import "./styling.css";

function AuthorInfo(props) {

  const recipeAuthor = <div>{props.name}</div>;
  const recipeAuthorImage = <img src={props.profilePic} className={'authorImage'} alt={props.name}/>;
  const recipeWebsite = <a href={props.link}>Author Website</a>;

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
