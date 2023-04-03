import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {Storage} from "@ionic/storage";
import TrendsForm from "../components/TrendsForm/trends-form";
import "./Home.css";

interface HomeProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = (props: HomeProps) => {
  const {isLoggedIn, setIsLoggedIn} = props;
  const storage = new Storage();

  const handleLogout = () => {
    storage.create();
    storage.set("isLoggedIn", false);
    console.log("loggedOUt");
  };
  return (
    <IonPage>
      <IonHeader class="ion-flex">
        <IonToolbar class="ion-flex">
          <IonTitle>Trend Awareness</IonTitle>
          <IonItem>
            <IonButton
              class="ion-margin-top"
              color={"danger"}
              onClick={handleLogout}>
              Logout
            </IonButton>
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
