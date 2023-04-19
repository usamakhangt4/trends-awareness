import {
  IonButton,
  IonCol,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

interface HeaderTypes {
  handleLogout: () => void;
}

export const Header = (props: HeaderTypes) => {
  const {handleLogout} = props;

  return (
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
  );
};
