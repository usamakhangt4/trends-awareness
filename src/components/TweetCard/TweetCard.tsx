import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonImg,
} from "@ionic/react";
import {heart, repeatOutline} from "ionicons/icons";
import * as R from "ramda";
import "../../styles/twitter-card.scss";

interface TweetCardPropsType {
  tweet: never;
}
export const TweetCard = (props: TweetCardPropsType) => {
  const {tweet} = props;
  const imageLink = R.pathOr("", ["Image_link"], tweet);
  const UserScreenName = R.pathOr("", ["UserScreenName"], tweet);
  const UserName = R.pathOr("", ["UserName"], tweet);
  const orginalTweet = R.pathOr("", ["orginal_tweet"], tweet);
  const likes = R.pathOr("", ["Likes"], tweet);
  const retweets = R.pathOr("", ["Retweets"], tweet);
  const sentiment = R.pathOr("", ["sentiment"], tweet);
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{UserScreenName}</IonCardTitle>
        <IonCardSubtitle>{UserName}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <p>{orginalTweet}</p>

        <div className="images-container">
          <IonImg src={imageLink} />
        </div>

        <div className="card-actions">
          <div className="likes-container">
            <IonIcon icon={heart} className="ion-icon" />
            <span>{likes}</span>
          </div>
          <div className="retweets-container">
            <IonIcon icon={repeatOutline} className="ion-icon" />
            <span>{retweets}</span>
          </div>
          <div className={`sentiment-container ${sentiment}`}>
            <span>{sentiment}</span>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};
