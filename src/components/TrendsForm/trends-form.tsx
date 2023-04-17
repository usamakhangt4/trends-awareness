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
import {useTweetsScraping} from "../../services/api/scrape";

interface Inputs {
  since: string;
  until: string;
  words: string;
  limit: number;
  interval: number;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

const TrendsForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>();

  const {scrapeTweets} = useTweetsScraping();

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    console.log(data);

    // Convert dates to the desired format
    const formattedData = {
      ...data,
      since: formatDate(data.since),
      until: formatDate(data.until),
    };
    scrapeTweets(formattedData, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <IonCard class="ion-padding">
      <IonCardTitle>Form</IonCardTitle>
      <IonCardContent>
        <IonItem fill="solid">
          <IonLabel position="stacked">Since</IonLabel>
          <IonInput
            type="date"
            pattern="\d{4}-\d{2}-\d{2}"
            {...register("since", {required: true})}
          />
          {errors.since && <IonText color="danger">Since is required</IonText>}
        </IonItem>
        <IonItem fill="solid">
          <IonLabel position="stacked">until</IonLabel>
          <IonInput
            type="date"
            pattern="\d{4}-\d{2}-\d{2}"
            {...register("until", {required: true})}
          />
          {errors.until && <IonText color="danger">until is required</IonText>}
        </IonItem>
        <IonItem fill="solid">
          <IonLabel position="floating">Words</IonLabel>
          <IonInput type="text" {...register("words", {required: true})} />
          {errors.words && <IonText color="danger">Words is required</IonText>}
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
