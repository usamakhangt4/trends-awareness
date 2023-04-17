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
import {storage} from "./storage";

setupIonicReact();

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(false);

  useEffect(() => {
    storage.get("isLoggedIn").then((value) => {
      setIsLoggedIn(!!value);
    });
    storage.get("isAppLoading").then((value) => {
      setIsAppLoading(!!value);
    });
  }, [storage]);
  console.log({isLoggedIn});
  console.log({isAppLoading});

  return (
    <IonApp>
      <IonPage>
        {isLoggedIn ? (
          <AuthenticatedApp setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <UnAuthenticatedApp setIsLoggedIn={setIsLoggedIn} />
        )}
      </IonPage>
    </IonApp>
  );
};
export default App;
