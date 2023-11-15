import Banner from "../Banner/Banner";
import BoosSection from "../BoosSection/BoosSection";
import CallSection from "../CallSection/CallSection";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import OurMenu from "../OurMenu/OurMenu";
import Recomands from "../Recomansds/Recomands";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <BoosSection></BoosSection>
          <OurMenu> </OurMenu>
          <CallSection></CallSection>
          <Recomands></Recomands>
          <Feature> </Feature>
          <Review></Review>
        
        </div>
    );
};

export default Home;