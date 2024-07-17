
import Layout from "./components/Layout";
import Preloader from './components/Preloader';
import Hero from './components/Sections/Hero';
import Progress from './components/ProgressBar';
import OurAchievements from './components/Sections/OurAchivements';
import OurServices from './components/Sections/OurServices';



function App() {
 
  return (
    <>
      <Layout>
        {/* <Preloader/> */}
        <Progress/>
        <Hero/>
        <OurAchievements/>
        <OurServices/>
      </Layout>
    </>
  )
}

export default App;
