import MainContainer from "./layout/MainContainer";
import { useState, useEffect, useContext } from "react";
import Header from "./layout/Header";
import Modal from "./modal/Modal";
import CartContext from "./modal/modalContext";
import contentData from "./contentData";
import Loader from "./layout/Loader";
import Footer from "./layout/Footer";
import { Banner } from "./components/Banner";

function App() {
  const { currentTopicTitle } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  const topicData = contentData[currentTopicTitle];

  return (
    <div>
      <Modal topicData={topicData} />
      <main>
        <Banner></Banner>
        <Header></Header>
        {isLoading && <Loader />}
        <MainContainer></MainContainer>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
