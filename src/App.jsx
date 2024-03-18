import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Recipes from './Components/Recipes'
import WantToCook from './Components/WantToCook'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CurrentlyCooking from './Components/CurrentlyCooking'
import Footer from './Components/Footer'

function App() {
const [cookingTime , setCookingTime] = useState(0);
const [totalCalories , setTotalCalories] = useState(0);


  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking , setCurrentlyCooking] = useState([]);
  const handleWantToCook = (recipe) => {
    const isExist = wantToCook.find(item => item.recipe_id === recipe.recipe_id);
    if (!isExist) {
      setWantToCook([...wantToCook, recipe]);
      toast.success("Successfully Added");
    }
    else {
      toast.warn("Already Exist");
    }
  }

  const handlePreparingButton = (id , time , calories) => {
    const remainingRecipe = wantToCook.filter(item => item.recipe_id !== id);
    setWantToCook(remainingRecipe);
    const preparingRecipe = wantToCook.filter(item => item.recipe_id === id);
    setCurrentlyCooking([...currentlyCooking , preparingRecipe]);
    setCookingTime(parseInt(cookingTime) + parseInt(time));
    setTotalCalories(parseInt(totalCalories) + parseInt(calories));
  }
  return (
    <div className='container mx-auto '>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='flex lg:gap-14 gap-10 flex-col lg:flex-row'>
        <div className='lg:w-2/3'>
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
        </div>
        <div className='lg:w-1/3'>
          <WantToCook wantToCook={wantToCook} handlePreparingButton ={handlePreparingButton}></WantToCook>
          <CurrentlyCooking currentlyCooking={currentlyCooking} cookingTime={cookingTime} totalCalories ={totalCalories}></CurrentlyCooking>
        </div>
      </div>
      <ToastContainer />
      <Footer></Footer>
    </div>
  )
}

export default App
