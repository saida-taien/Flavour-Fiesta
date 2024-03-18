import PropTypes from 'prop-types';

const CookingTitle = ({ item, idx }) => {
    const recipe = item[0];
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.preparing_time} minutes</td>
            <td>{recipe.calories} calories</td>

        </tr>
    );
};
CookingTitle.propTypes = {
    item: PropTypes.array,
    idx: PropTypes.number,
}
export default CookingTitle;