import {
  IonBackButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonPage,
  IonText,
} from "@ionic/react";
import {useState} from "react";
import LoginForm from "./components/Login/login-form";
import SignupForm from "./components/Signup/signup-form";
import "./styles/un-authenticated-app.scss";

const UnAuthenticatedApp = () => {
  const [isSignUpPage, setIsSignUpPage] = useState(false);
  return (
    <IonContent>
      <IonCard class="ion-padding">
        <IonCardTitle>{isSignUpPage ? "SignUp" : "Login"}</IonCardTitle>
        <IonCardContent>
          {isSignUpPage ? <SignupForm /> : <LoginForm />}
        </IonCardContent>
        <IonCardSubtitle class="row-flex-center" style={{gap: 10}}>
          <IonText color="medium">
            {isSignUpPage ? "Already" : "Don't"} have an account?
          </IonText>
          <IonButton
            size="small"
            fill="clear"
            color={"danger"}
            onClick={() => setIsSignUpPage(!isSignUpPage)}>
            {!isSignUpPage ? "SignUp" : "Login"}
          </IonButton>
        </IonCardSubtitle>
      </IonCard>
    </IonContent>
  );
};

export default UnAuthenticatedApp;
