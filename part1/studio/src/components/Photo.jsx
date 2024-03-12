import styles from './Description.module.css';

export default function RecipePhoto() {
    return (
        <img 
            src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_3:2/v1/img/recipes/22/75/4/6SPX9PQ6WWdM49K06A1A_pizzaaa.jpg" 
            alt="React pizza photo" 
            className = {styles.imageUpdates} 
            style={{ 
                borderRadius: '1rem',
                objectFit: 'cover'
            }}
        />
    );
}