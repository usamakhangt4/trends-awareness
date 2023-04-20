import {IonCard, IonCardContent, IonCardTitle} from "@ionic/react";
import {useState} from "react";

import {TweetCard} from "../TweetCard/TweetCard";

interface ResultsType {
  trendsData: never[];
}
export const Results = (props: ResultsType) => {
  const {trendsData} = props;

  const [showTweets, setShowTweets] = useState(false);
  const [showWordCloud, setShowWordCloud] = useState(false);

  return (
    <IonCard class="ion-padding">
      <IonCardTitle>Results</IonCardTitle>
      <IonCardContent>
        {trendsData.map((tweet, index) => (
          <TweetCard tweet={tweet} key={index} />
        ))}
      </IonCardContent>
    </IonCard>
  );
};
