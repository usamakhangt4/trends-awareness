import {IonSpinner} from "@ionic/react";
import "../../styles/Loader.scss";

export const Loader = () => {
  return (
    <div className="pyramid-loader">
      <div className="pyramid-loader__text">
        <p className="pyramid-loader__text--animated">Processing</p>
      </div>
      <div className="pyramid-loader__side pyramid-loader__side--1">
        <IonSpinner name="dots" />
      </div>
      <div className="pyramid-loader__side pyramid-loader__side--2">
        <IonSpinner name="dots" />
      </div>
      <div className="pyramid-loader__side pyramid-loader__side--3">
        <IonSpinner name="dots" />
      </div>
      <div className="pyramid-loader__side pyramid-loader__side--4">
        <IonSpinner name="dots" />
      </div>
    </div>
  );
};
