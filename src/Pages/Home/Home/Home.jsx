import Banner from "../Banner/Banner";
import BoosSection from "../BoosSection/BoosSection";
import CallSection from "../CallSection/CallSection";
import Category from "../Category/Category";
import OurMenu from "../OurMenu/OurMenu";
import Recomands from "../Recomansds/Recomands";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <BoosSection></BoosSection>
          <OurMenu> </OurMenu>
          <CallSection></CallSection>
          <Recomands></Recomands>
        
        </div>
    );
};

export default Home;