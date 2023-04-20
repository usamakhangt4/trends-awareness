import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import TrendsForm from "../components/TrendsForm/trends-form";
import "./Home.css";
import {Header} from "../components/Header/Header";
import {storage} from "../storage";
import {useEffect, useState} from "react";
import {Results} from "../components/Results/Results";
import {isNothing} from "../utils";

interface HomeTypes {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home = (props: HomeTypes) => {
  const {setIsLoggedIn} = props;

  const [trendsData, setTrendsData] = useState([]);
  const [isTrendsForm, setIsTrendsForm] = useState(isNothing(trendsData));

  const handleLogout = () => {
    storage.set("isLoggedIn", false);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsTrendsForm(isNothing(trendsData));
  }, [trendsData]);

  return (
    <IonPage>
      <Header handleLogout={handleLogout} />
      <IonContent fullscreen>
        {isTrendsForm ? (
          <TrendsForm setTrendsData={setTrendsData} />
        ) : (
          <Results trendsData={trendsData} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
