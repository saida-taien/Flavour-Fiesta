import PropTypes from 'prop-types';
import Ingredients from './Ingredients';
const Recipe = ({ recipe , handleWantToCook }) => {
    const { image, short_description, recipe_name, ingredients, preparing_time, calories } = recipe;
    return (
        <div>
            <div className="card h-full  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt={recipe_name} className="rounded-xl" />
                </figure>
                <div className="card-body items-start text-start">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='text-[#878787] '>{short_description}</p>
                    <div className='divider'></div>
                    <div className='text-start'>
                        <h1 className='text-xl font-medium pb-3'>Ingredients: {ingredients.length}</h1>
                        <div className='space-y-2'>
                            {
                                ingredients.map((list, idx) => <Ingredients key={idx} list={list}></Ingredients>)
                            }
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className='flex gap-10 text-gray-400'>
                        <div className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                            <p>{preparing_time} minutes</p>
                        </div>
                        <div className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                        </svg>
                        <p>{calories} calories</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-purple-500 rounded-full px-10 mt-9 text-white" onClick={()=> handleWantToCook(recipe)}>Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook:PropTypes.func.isRequired
}

export default Recipe;