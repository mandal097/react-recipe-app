import { useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import Banner from '../../components/PremiumBanner/Banner'
import FilteredRecipes from '../../components/AllRecipeRecipes/Recipes'
const AllRecipes = () => {
    const navigate = useNavigate()
    const [searchTxt, setSearchTxt] = useState(null)
    const [placeholder, setPlaceholder] = useState('Search Recipes')


    const handleClick = (e) => {
        e.preventDefault()
        searchTxt ? navigate(`/search/${searchTxt}`) : setPlaceholder('Type your recipe name')

    }
    return (
        <>
            <div className='all_recipe'>
                <div className="all_recipe_wrapper">
                    <h2>Explore Over <span>50,000+</span> Unique Low-Carb and Keto Recipes</h2>
                    <div className="search_div">
                        <div className="search_icon"></div>
                        <input type="text" name="" id="" onChange={(e) => setSearchTxt(e.target.value)} placeholder={`${placeholder}`} />
                        <button className="search_btn" onClick={handleClick}>Search</button>
                    </div>
                    <h4>Cant think of anything? <span> Try these popular tags</span></h4>
                    <div className="popular_tags">
                        <span>Gluten Free</span>
                        <span>Quick & Easy</span>
                        <span>Snacks</span>
                        <span>Deserts</span>
                    </div>
                </div>
            </div>
            <FilteredRecipes />
            <Banner />
        </>
    )
}

export default AllRecipes