import {IonCard, IonCardContent, IonCardTitle} from "@ionic/react";
import {useState} from "react";

export const Results = () => {
  const [showTweets, setShowTweets] = useState(false);
  const [showWordCloud, setShowWordCloud] = useState(false);

  return (
    <IonCard class="ion-padding">
      <IonCardTitle>Results</IonCardTitle>
      <IonCardContent>
        <IonCard class="ion-padding">
          <IonCardTitle>Results</IonCardTitle>
          <IonCardContent></IonCardContent>
        </IonCard>
      </IonCardContent>
    </IonCard>
  );
};
