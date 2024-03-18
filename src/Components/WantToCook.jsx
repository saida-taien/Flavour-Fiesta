import Title from "./Title";
import PropTypes from 'prop-types';

const WantToCook = ({ wantToCook, handlePreparingButton }) => {
    // console.log(wantToCook);
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center pb-4">Want to cook : {wantToCook.length}</h1>
            <div className="divider"></div>
            <table className="table">
                <thead className="mb-10">
                    <tr className='text-lg text-black font-medium bg-purple-200'>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wantToCook.map((item, idx) => <Title handlePreparingButton={handlePreparingButton} idx={idx} item={item} key={idx} ></Title>)
                    }
                </tbody>
            </table>
        </div>
    );
};
WantToCook.propTypes = {
    wantToCook: PropTypes.array.isRequired,
    handlePreparingButton: PropTypes.func.isRequired
}

export default WantToCook;