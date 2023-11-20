import HomePageParticle from "./subcomponents/HomePageParticle"
import NavBar from "./subcomponents/NavBar"
import AboutUs from "./subcomponents/AboutUs"
import Main from "./subcomponents/Main"

const HomePage = () => {
  return (
    <div className="container">
      <HomePageParticle />
      <NavBar />
      <Main />
      <AboutUs />
    </div>
  )
}

export default HomePage
