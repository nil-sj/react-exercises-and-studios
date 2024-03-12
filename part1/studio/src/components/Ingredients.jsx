import styles from './Ingredients.module.css';

export default function RecipeIngredients() {

    let ingredients = [
        '2 1⁄2 cups flour', 
        '1 teaspoon salt', 
        '1 teaspoon sugar', 
        '1 tablespoon fast rise yeast', 
        '1 cup water',
        '1 tablespoon oil',
        '1/4 cup tomato sauce'
    ];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
                <li>{ingredients[5]}</li>
                <li>{ingredients[6]}</li>
            </ul>
        </div>
    );
}