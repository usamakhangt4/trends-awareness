import {IonCard, IonCardContent, IonCardTitle} from "@ionic/react";
import {useState} from "react";
import * as R from "ramda";

import {TweetCard} from "../TweetCard/TweetCard";

interface ResultsType {
  trendsData: never[];
  handleGoBack: () => void;
}
export const Results = (props: ResultsType) => {
  const {trendsData, handleGoBack} = props;

  const [showTweets, setShowTweets] = useState(false);
  const [showWordCloud, setShowWordCloud] = useState(false);

  const data = R.pathOr([], ["data"], trendsData);

  return (
    <IonCard class="ion-padding">
      <span onClick={() => handleGoBack()}>{"< Go Back"}</span>
      <br />
      <br />
      <IonCardTitle>Results</IonCardTitle>
      <IonCardContent>
        {data.map((tweet, index) => (
          <TweetCard tweet={tweet} key={index} />
        ))}
      </IonCardContent>
    </IonCard>
  );
};
