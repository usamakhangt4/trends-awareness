import {IonContent, IonPage} from "@ionic/react";
import TrendsForm from "../components/TrendsForm/trends-form";
import "./Home.css";
import {Header} from "../components/Header/Header";
import {useEffect, useState} from "react";
import {Results} from "../components/Results/Results";
import {isNothing} from "../utils";
import {Loader} from "../components/Loader/Loader";

interface HomeTypes {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home = (props: HomeTypes) => {
  const {setIsLoggedIn} = props;

  const [trendsData, setTrendsData] = useState([]);
  const [isTrendsForm, setIsTrendsForm] = useState(isNothing(trendsData));
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // setIsLoading(isNothing(trendsData));
    setIsTrendsForm(isNothing(trendsData));
    console.log("useEffect", trendsData, isLoading, isTrendsForm);
  }, [trendsData]);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  console.log("useEffect k bahar", trendsData, isLoading, isTrendsForm);
  return (
    <IonPage>
      <Header handleLogout={handleLogout} />
      <IonContent fullscreen>
        {/* {isLoading && <Loader />} */}
        {isTrendsForm ? (
          <TrendsForm
            setTrendsData={setTrendsData}
            setIsLoading={setIsLoading}
            setIsTrendsForm={setIsTrendsForm}
          />
        ) : (
          <Results trendsData={trendsData} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
