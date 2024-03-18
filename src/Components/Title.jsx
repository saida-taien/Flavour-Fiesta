import PropTypes from 'prop-types';


const Title = ({ item, idx, handlePreparingButton }) => {
    // console.log(item)
    const { preparing_time, calories } = item;
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{item.recipe_name}</td>
            <td>{item.preparing_time} minutes</td>
            <td>{item.calories} calories</td>
            <td><button onClick={() => handlePreparingButton(item.recipe_id, preparing_time, calories)} className="btn rounded-full bg-purple-600 text-white mt-4">Preparing</button></td>
        </tr>

    );
};
Title.propTypes = {
    item: PropTypes.object,
    idx: PropTypes.number,
    handlePreparingButton: PropTypes.func
}
export default Title;