import React from "react";
import styles from './Description.module.css';

function RecipeAuthor() {
    
    let authorLink = 'https://www.food.com/recipe/easy-and-quick-homemade-pizza-22754';
    let authorPhoto = 'https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_202,w_202/v1/gk-static/gk/img/avatar/pasta.png';
    let authorName = 'MizzNezz';

    return (
        <div className = {styles.recipeAuthorBlock}> 
            <img 
                src={authorPhoto}
                alt="Profile Photo of MizzNezz" 
                className={styles.imageUpdates} 
                width="100"
                style={{borderRadius: '50%'}} 
            />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Recipe on Food.Com</a> 
            </div>
        </div>
    );

}

class RecipeDescription extends React.Component {

    render() {
        return (
            <div> 
                <div>
                    <h1>React Pizza</h1>
                    <p>"Pizza from scratch in under an hour. Much better than the ones you buy! Use your favorite toppings." - used in an example React Code.</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }

}

export default RecipeDescription;

