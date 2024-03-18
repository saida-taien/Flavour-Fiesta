import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({handleWantToCook}) => {
    const [recipe , setRecipe] = useState([]);
    useEffect(() =>
    {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setRecipe(data));
    }, []);
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
            {
                recipe.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleWantToCook={handleWantToCook}></Recipe>)
            }
        </div>
    );
};
Recipes.propTypes = {
    handleWantToCook:PropTypes.func.isRequired
}
export default Recipes;