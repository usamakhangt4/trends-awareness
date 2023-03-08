import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import TrendsForm from "../components/TrendsForm/trends-form";
import "./Home.css";

interface HomeProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = (props: HomeProps) => {
  const {isLoggedIn, setIsLoggedIn} = props;
  return (
    <IonPage>
      <IonHeader class="ion-flex">
        <IonToolbar>
          <IonTitle>Trend Awareness</IonTitle>
          <IonItem onClick={() => setIsLoggedIn(!isLoggedIn)}>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>
              {isLoggedIn ? "User Logged In" : "User Logged Out"}
            </IonLabel>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TrendsForm />
      </IonContent>
    </IonPage>
  );
};

export default Home;
