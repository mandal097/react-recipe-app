import { useEffect, useState } from 'react';
import './style.scss'
import axios from 'axios';
import { apiKey } from '../../config/apikey';
// import { useLocation } from 'react-router-dom';

const RecipeLandingPage = ({id}) => {
    // const location = useLocation()
    // const id = location.pathname.split('/')[2]

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        const apikey = apiKey
        const fetchRecipe = async () => {
            const recipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apikey}`)
            // console.log(recipe.data);
            setRecipe(recipe.data)
        }
        fetchRecipe()
    }, [id])


    return (
        <div className='recipe_landing_page'>
            <div className="product_image">
                <img src={recipe.image} alt="" />
            </div>
            <div className="recipe_landing_page_wrapper">
                <div className="recipe_landing_page_details">
                    <div className="recipe_landing_page_times">
                        <div className="for_icon"></div>
                        <div className="texts">
                            <p>PREP TIME</p>
                            <h3>20 <span>min</span></h3>
                        </div>
                    </div>
                    <div className="recipe_landing_page_times">
                        <div className="for_icon"></div>
                        <div className="texts">
                            <p>COOK TIME</p>
                            <h3>20 <span>min</span></h3>
                        </div>
                    </div>
                    <div className="recipe_landing_page_times">
                        <div className="for_icon"></div>
                        <div className="texts">
                            <p>READY TIME</p>
                            <h3>40 <span>min</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeLandingPage