import classes from "./App.module.css";
import MainContainer from "./layout/MainContainer";
import { useState, useEffect, useContext } from "react";
import Header from "./layout/Header";
import Modal from "./modal/Modal";
import CartContext from "./modal/modalContext";
import data from "./data";
import Loader from "./layout/Loader";

function App() {
  const { currentTopicTitle } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(false);
  //   // setTimeout(() => {
  //   //   setIsLoading(false);
  //   // }, "1000");
  // }, []);

  const topicData = data[currentTopicTitle];

  return (
    <div>
      <Modal topicData={topicData} />
      <main className={classes.App}>
        <Header></Header>
        {/* {isLoading && <Loader />} */}
        <MainContainer></MainContainer>
      </main>
    </div>
  );
}

export default App;
