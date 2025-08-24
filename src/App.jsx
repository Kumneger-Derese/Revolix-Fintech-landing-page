import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import {useTheme} from './context/ThemeContext.jsx'
import Company from "./components/Company.jsx";
import Features from "./components/Features.jsx";
import Offer from "./components/Offer.jsx";
import Steps from "./components/Steps.jsx";
import Stats from "./components/Stats.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
    const {isDark} = useTheme()

    return (
        <div
            className={`${isDark && 'dark'}
      bg-light text-slate-900 dark:bg-slate-900 dark:text-light transition-colors duration-500`}
        >
            <Navbar/>
            <Hero/>

            <div className={'px-8'}>
                <Company/>
                <Features/>
            </div>

            <Offer/>

            <div className={'px-8'}>
                <Steps/>
            </div>

            <Stats/>

            <div className={'px-8'}>
                <Testimonials/>
                <Pricing/>
            </div>

            <CTA/>
            <Footer/>

        </div>
    )
}

export default App
