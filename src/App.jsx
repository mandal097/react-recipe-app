// import './App.scss'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './pages/Error/ErrorPage'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginForm from './pages/Login/LoginForm'
import Support from './pages/Support/Support'
import Recipe from './pages/Recipe/Recipe'
import Articles from './pages/Articles/Articles'
import ArticlesReadMore from './pages/ArticlesReadMore/ArticlesReadMore'
import SearchRecipe from './pages/SearchRecipe/SearchRecipe'
import AllRecipes from './pages/AllRecipes/AllRecipes'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/signin' element={<LoginForm />} />
          <Route path='allrecipe' element={<AllRecipes />} />
          <Route path='/recipe/:id' element={<Recipe />} />
          <Route path='articles' element={<Articles />} />
          <Route path='articles/brief/:id' element={<ArticlesReadMore />} />
          <Route path='search/:name' element={<SearchRecipe />} />
          <Route path='help' element={<Support />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
