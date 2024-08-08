
import Hero from '../components/Sections/Hero';
import Progress from '../components/ProgressBar';
import OurAchievements from '../components/Sections/OurAchivements';
import OurServices from '../components/Sections/OurServices';



function Home() {
 
  return (
    <>
        {/* <Preloader/> */}
        <Progress/>
        <Hero/>
        <OurAchievements/>
        <OurServices/>
    </>
  )
}

export default Home;
