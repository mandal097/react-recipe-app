// import React from 'react'
import './Home.scss'
import Email from '../../components/EmailSubscribe/Email'
import Apps from '../../components/GetApps/Apps'
import HomeCompanies from '../../components/HomeCompanies/HomeCompanies'
import Text from '../../components/HomeCommonTxt/Text'
import CarbManager from '../../components/HomeCarbManager/CarbManager'
import CarbManagerByNumber from '../../components/HomecarbManagByNumber/CarbManagerByNumber'
import HomePlatform from '../../components/HomePlatform/HomePlatform'
import Slider from '../../components/HomeSlider/Slider'
import CarbRecipes from '../../components/RecipesCarb/CarbRecipes'
import LowCarb from '../../components/HomeLowCarb/LowCarb'
import KetoBanner from '../../components/KetoBanner/KetoBanner'
import { useNavigate } from 'react-router-dom'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

const Home = () => {
    const navigate = useNavigate();

    const navigateToAllrecipe = () => {
        navigate('/allrecipe');
        window.scroll({
            top: 0,
            behaviorr: 'auto'
        })
    }
    return (
        <div>
            <div className='home_landing_page'
                style={{
                    background: `radial-gradient(ellipse at center,#2dd29a  0, #1ca677 100%)`
                }}
            >
                <div className="home_landing_page_wrapper">
                    <div className="left">
                        <div className="left_head">
                            <h1>Keto & Low-Carb Made Easy</h1>
                            <span>The #1 Low-Carb and Keto Diet App</span>
                            <span className='light'>For healthy & sustainable low-carb living</span>
                        </div>
                        <Email />
                        <Apps />
                    </div>
                    <div className="right">
                        <img src='../../../public/images/homelandingpage.png' alt="" />
                    </div>
                </div>
            </div>
            <HomeCompanies />

            <div className='home_third_page'>
                <div className="home_third_page_wrapper">
                    <div className="home_third_page_first">
                        <div className="home_third_page_first_left">
                            <div className="home_third_page_first_left_top">
                                <h2>Get to Know Keto & Low-Carb</h2>
                                <h4>And get results in as little as <span> 3 weeks.</span></h4>
                            </div>
                            <div className="home_third_page_first_left_bottom">
                                <div className="img"></div>
                            </div>
                        </div>
                        <div className="home_third_page_first_right">
                            <div className="home_third_page_first_right_top">
                                <img src={window.location.origin + "/images/avacado.png"} alt="" />
                            </div>
                            <div className="home_third_page_first_right_bottom">
                                <Text h='Keto for' spann='you' />
                                <p>Personalize your low-carb journey and meet all your important health goals. We’re more than just a Keto calorie counter. Carb Manager integrates seamlessly with FitBit, Garmin, and hundreds of other apps and devices via Apple Health and Google Fit, helping you to:</p>
                                <div className="points">
                                    <div className="point">
                                        <div className="left"></div>
                                        <div className="right">Lose weight quickly</div>
                                    </div>
                                    <div className="point">
                                        <div className="left"></div>
                                        <div className="right">Reduce inflammation</div>
                                    </div>
                                    <div className="point">
                                        <div className="left"></div>
                                        <div className="right">Optimize energy</div>
                                    </div>
                                    <div className="point">
                                        <div className="left"></div>
                                        <div className="right">Gain mental clarity</div>
                                    </div>
                                    <div className="point">
                                        <div className="left"></div>
                                        <div className="right">Restore balance</div>
                                    </div>
                                    <div className="point">
                                        <div className="left"></div>
                                        <div className="right"> Manage cravings</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='keto_for_everyone'>
                <div className="keto_for_everyone_wrapper">
                    <div className="left">
                        <div className="left_head">
                            <Text h='Keto for' spann='everyone' />
                            <p>Keto isn’t just another diet. It’s a lifestyle. And Carb Manager isn’t just another Keto diet tracker. Our state-of-the-art features make it convenient and fun for everyone to join in.</p>
                        </div>
                        <div className="bottom">
                            <div className="points">
                                <div className="left hat"></div>
                                <div className="point">
                                    <p>Save time with automatic meal plans and grocery lists tailored to specific food preferences and allergies</p>
                                </div>
                            </div>
                            <div className="points">
                                <div className="left chef"> </div>
                                <div className="point">
                                    <p>Stay inspired by our database of thousands of Keto recipes</p>
                                </div>
                            </div>
                            <div className="points">
                                <div className="left niddle"> </div>
                                <div className="point">
                                    <p>Have fun tracking the macros and micros of over 1 million foods with cutting-edge features, like our popular Snap Foods feature that uses photo recognition technology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="img"></div>
                    </div>
                </div>
            </div>

            <div className="keto_for_life">
                <div className="keto_for_life_wrapper">
                    <div className="left">
                        <div className="img"></div>
                    </div>
                    <div className="right">
                        <div className="right_head">
                            <Text h='Keto for' spann='life' />
                            <p>Carb Manager is here to help you stick to your low-carb lifestyle.</p>
                        </div>
                        <div className="middle">
                            <div className="points">
                                <div className="points_left"></div>
                                <div className="point">
                                    <p>Worried about cravings?</p>
                                </div>
                            </div>
                            <div className="points">
                                <div className="points_left"></div>
                                <div className="point">
                                    <p>Want to know how your kids can do it too?</p>
                                </div>
                            </div>
                            <div className="points">
                                <div className="points_left"></div>
                                <div className="point">
                                    <p>Wonder how long before you see results?</p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <p>
                                Our popular blog will keep you inspired and informed. And our active social media community lets you stay connected to other low-carb folks, so you’ll always get the support you need.</p>
                        </div>
                    </div>
                </div>
            </div>

            <CarbManager />

            <div className='apps_and_devices'>
                <div className="apps_and_devices_wrapper">
                    <div className="content_box">
                        <h2 className="apps_header">Connect Apps & Devices</h2>
                        <p className="para">We integrate with Fitbit, Garmin and hundreds of other apps and devices via Apple Health and Google Fit. Connect your device and sync activity “automagically”.</p>
                    </div>
                    <div className="icons_ icons_1"></div>
                    <div className="icons_ icons_2"></div>
                    <div className="icons_ icons_3"></div>
                    <div className="icons_ icons_4"></div>
                </div>
            </div>

            <CarbManagerByNumber />
            <HomePlatform />
            <Slider />
            <CarbRecipes />
            <LowCarb />
            <KetoBanner />

            <div className='keto_recipe'>
                <div className="keto_recipe_wrapper">
                    <div className="keto_recipe_head">
                        <h2>Explore More Recipes</h2>
                    </div>
                    <div className="keto_recipe_cards_container">
                        <div className="keto_recipe_cards ">
                            <div className="text">
                                <h2>keto <span>Easy</span><br /> Recipes</h2>
                            </div>
                            <div className="img_div keto_recipe_cards_1"></div>
                        </div>
                        <div className="keto_recipe_cards ">
                            <div className="text">
                                <h2>keto <span>Snack</span><br /> Recipes</h2>
                            </div>
                            <div className="img_div keto_recipe_cards_2"></div>
                        </div>
                        <div className="keto_recipe_cards ">
                            <div className="text">
                                <h2>keto <span>Breakfase</span><br /> Recipes</h2>
                            </div>
                            <div className="img_div keto_recipe_cards_3"></div>
                        </div>
                        <div className="keto_recipe_cards ">
                            <div className="text">
                                <h2>keto <span>Smoothie</span><br /> Recipes</h2>
                            </div>
                            <div className="img_div keto_recipe_cards_4"></div>
                        </div>
                    </div>
                    <div className="keto_recipe_button">
                        <button onClick={navigateToAllrecipe}>View All Recipes</button>
                    </div>
                </div>
            </div>

            <NewsLetter />

        </div>
    )
}

export default Home