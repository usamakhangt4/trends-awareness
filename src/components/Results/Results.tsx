import {IonCard, IonCardContent, IonCardTitle} from "@ionic/react";
import {useState} from "react";
import * as R from "ramda";

import {TweetCard} from "../TweetCard/TweetCard";

interface ResultsType {
  trendsData: never[];
}
export const Results = (props: ResultsType) => {
  const {trendsData} = props;

  const [showTweets, setShowTweets] = useState(false);
  const [showWordCloud, setShowWordCloud] = useState(false);

  const data = R.pathOr([], ["data"], trendsData);
  console.log({data});

  return (
    <IonCard class="ion-padding">
      <IonCardTitle>Results</IonCardTitle>
      <IonCardContent>
        {data.map((tweet, index) => (
          <TweetCard tweet={tweet} key={index} />
        ))}
      </IonCardContent>
    </IonCard>
  );
};
