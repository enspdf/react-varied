import React from "react";
import uuid from "uuid/v4";

const RecipeDetails = ({ ingredients }) => {
    return ingredients.map(ingredient => {
        return (
            <ul key={uuid()} className="ingredient-list">
                <li className="ingredient-text">
                    {ingredient.text}
                </li>
                <li className="ingredient-weight">
                    {ingredient.weight}
                </li>
            </ul>
        );
    });
};

export default RecipeDetails;