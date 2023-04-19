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
import {useState} from "react";
import {Results} from "../components/Results/Results";

interface HomeTypes {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home = (props: HomeTypes) => {
  const {setIsLoggedIn} = props;

  const [isTrendsForm, setIsTrendsForm] = useState(true);

  const handleLogout = () => {
    storage.set("isLoggedIn", false);
    setIsLoggedIn(false);
  };
  const handleFormSubmit = () => {};

  return (
    <IonPage>
      <Header handleLogout={handleLogout} />
      <IonContent fullscreen>
        {isTrendsForm ? <TrendsForm /> : <Results />}
      </IonContent>
    </IonPage>
  );
};

export default Home;
