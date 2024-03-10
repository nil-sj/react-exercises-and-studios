import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {

   return (
      <div>
         <h3 className = {classes.choresHeading}>Chores I Want To Do Today</h3>
         <ol>
            <li className={classes.choresText}>Wash Clothes</li>
            <li className={classes.choresText}>Wash Dishes</li>
            <li className={classes.choresText}>Wash Car</li>
         </ol>
      </div>
   );
}