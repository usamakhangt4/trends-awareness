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
import {Storage} from "@ionic/storage";
import TrendsForm from "../components/TrendsForm/trends-form";
import "./Home.css";

interface HomeTypes {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home = (props: HomeTypes) => {
  const {setIsLoggedIn} = props;
  const storage = new Storage();

  const handleLogout = () => {
    storage.create();
    storage.set("isLoggedIn", false);
    setIsLoggedIn(false);
  };
  console.log("home page");

  return (
    <IonPage>
      <IonHeader class="ion-flex">
        <IonToolbar>
          <IonGrid>
            <IonRow class="ion-align-items-center">
              <IonCol>
                <IonTitle>Trend Awareness</IonTitle>
              </IonCol>
              <IonCol size="auto">
                <IonButton color="danger" fill="clear" onClick={handleLogout}>
                  Logout
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
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
