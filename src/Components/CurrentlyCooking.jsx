import PropTypes from 'prop-types';
import CookingTitle from './CookingTitle';
const CurrentlyCooking = ({ currentlyCooking, cookingTime, totalCalories }) => {

    return (
        <div>

            <h1 className="text-center text-2xl font-semibold pt-10">Currently cooking: {currentlyCooking.length}</h1>
            <div className="divider"></div>
            <table className="table">
                <thead className="mb-10">
                    <tr className='text-lg text-black font-medium bg-purple-200'>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentlyCooking.map((item, idx) => <CookingTitle idx={idx} item={item} key={idx} cookingTime={cookingTime}></CookingTitle >)
                    }
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Total Time : {cookingTime}</th>
                        <th>Total Calories : {totalCalories}</th>
                    </tr>

                </tbody>


            </table>


        </div>
    );
};
CurrentlyCooking.propTypes = {
    currentlyCooking: PropTypes.array,
    cookingTime: PropTypes.number,
    totalCalories: PropTypes.number

}
export default CurrentlyCooking;