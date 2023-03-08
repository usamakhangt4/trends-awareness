import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
} from "@ionic/react";
import {SubmitHandler, useForm} from "react-hook-form";

interface Inputs {
  since: string;
  untill: string;
  words: string;
  hashtag: string;
  fromAccount: string;
  limit: number;
  interval: number;
}

const TrendsForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    console.log(data);
  };

  return (
    <IonCard class="ion-padding">
      <IonCardTitle>Form</IonCardTitle>
      <IonCardContent>
        <IonItem fill="solid">
          <IonLabel position="stacked">Since</IonLabel>
          <IonInput type="date" {...register("since", {required: true})} />
          {errors.since && <IonText color="danger">Since is required</IonText>}
        </IonItem>
        <IonItem fill="solid">
          <IonLabel position="stacked">Untill</IonLabel>
          <IonInput type="date" {...register("untill", {required: true})} />
          {errors.untill && (
            <IonText color="danger">Untill is required</IonText>
          )}
        </IonItem>
        <IonItem fill="solid">
          <IonLabel position="floating">Words</IonLabel>
          <IonInput type="text" {...register("words", {required: true})} />
          {errors.words && <IonText color="danger">Words is required</IonText>}
        </IonItem>
        <IonItem fill="solid">
          <IonLabel position="floating">Hashtag</IonLabel>
          <IonInput type="text" {...register("hashtag", {required: true})} />
          {errors.hashtag && (
            <IonText color="danger">Hashtag is required</IonText>
          )}
        </IonItem>
        <IonItem fill="solid">
          <IonLabel position="floating">From Acount</IonLabel>
          <IonInput
            type="text"
            {...register("fromAccount", {required: true})}
          />
          {errors.fromAccount && (
            <IonText color="danger">From Acount is required</IonText>
          )}
        </IonItem>
        <IonItem fill="solid">
          <IonLabel position="floating">Limit</IonLabel>
          <IonInput type="number" {...register("limit", {required: true})} />
          {errors.limit && <IonText color="danger">Limit is required</IonText>}
        </IonItem>
        <IonItem fill="solid">
          <IonLabel position="floating">Interval</IonLabel>
          <IonInput type="number" {...register("interval", {required: true})} />
          {errors.interval && (
            <IonText color="danger">Interval is required</IonText>
          )}
        </IonItem>
        <IonButton
          class="ion-margin-top"
          color={"secondary"}
          onClick={handleSubmit(onSubmit)}>
          Submit
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default TrendsForm;
