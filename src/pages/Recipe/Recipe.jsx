import RecipeDetails from "../../components/RecipeDetails/RecipeDetails"
import { useLocation } from 'react-router-dom'
import RecipeLandingPage from "../../components/RecipeLandingPage/RecipeLandingPage"
import Ingredients from "../../components/RecipeIngrediants/Ingredients"
import RecipeSteps from "../../components/RecipeSteps/RecipeSteps"
import SImilarFood from "../../components/SimilarFood/SImilarFood"
import KetoRecipes from "../../components/KetoRecipesC/KetoRecipes"

const Recipe = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]


    return (
        <div>
            <RecipeLandingPage id={id} />
            <RecipeDetails id={id} />
            <Ingredients id={id} />
            <RecipeSteps id={id} />
            <SImilarFood id={id} />
            <KetoRecipes />
        </div>
    )
}

export default Recipe