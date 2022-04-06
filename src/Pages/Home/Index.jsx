import BlurContainer from "Components/Background/Blur";
import ImageBackground from "Components/Background/Image";
import Footer from "Components/Footer/Index";
import Content from "./Content";
import TestContent from "./TestContent";

const Home = () => {
  return (
    <ImageBackground>
      <BlurContainer>
        {process.env.NODE_ENV === "development" ? <TestContent /> : <Content />}
        <Footer />
      </BlurContainer>
    </ImageBackground>
  );
};

export default Home;
