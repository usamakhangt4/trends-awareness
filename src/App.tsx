import {Redirect, Route} from "react-router-dom";
import {
  IonApp,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import {useEffect, useState} from "react";
import AuthenticatedApp from "./authenticated-app";
import UnAuthenticatedApp from "./un-authenticated-app";
import {Storage} from "@ionic/storage";

setupIonicReact();

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storage = new Storage();
  const initializeStorage = async () => {
    await storage.create();
    const temp = await storage.get("isLoggedIn");
    setIsLoggedIn(Boolean(temp));
  };

  useEffect(() => {
    initializeStorage();
  }, []);

  return (
    <IonApp>
      <IonPage>
        {isLoggedIn ? (
          <AuthenticatedApp
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : (
          <UnAuthenticatedApp />
        )}
      </IonPage>
      {/* <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter> */}
    </IonApp>
  );
};
export default App;
