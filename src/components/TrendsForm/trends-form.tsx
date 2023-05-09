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
import * as R from "ramda";
import {useEffect} from "react";
import {Loader} from "../Loader/Loader";

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

interface TrendsFormType {
  setTrendsData: React.Dispatch<React.SetStateAction<never[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTrendsForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrendsForm = (props: TrendsFormType) => {
  const {setTrendsData, setIsLoading, setIsTrendsForm} = props;

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>();

  const {scrapeTweets, isLoading} = useTweetsScraping();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    setIsLoading(isLoading);
    // Convert dates to the desired format
    const formattedData = {
      ...data,
      since: formatDate(data.since),
      until: formatDate(data.until),
    };
    scrapeTweets(formattedData, {
      onSuccess: (data: any) => {
        console.log({data});

        setTrendsData(data);
        setIsLoading(false);
      },
      onSettled: () => {
        setIsTrendsForm(false);
        setIsLoading(false);
      },
      onError: (err) => {
        console.log(err);
      },
    });
    // setIsTrendsForm(true);
    // setIsLoading(false);
  };

  return (
    <IonCard class="ion-padding">
      <IonCardTitle>Form</IonCardTitle>
      {isLoading && <Loader />}
      {!isLoading && (
        <IonCardContent>
          <IonItem fill="solid">
            <IonLabel position="stacked">Since</IonLabel>
            <IonInput
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
              {...register("since", {required: true})}
            />
            {errors.since && (
              <IonText color="danger">Since is required</IonText>
            )}
          </IonItem>
          <IonItem fill="solid">
            <IonLabel position="stacked">until</IonLabel>
            <IonInput
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
              {...register("until", {required: true})}
            />
            {errors.until && (
              <IonText color="danger">until is required</IonText>
            )}
          </IonItem>
          <IonItem fill="solid">
            <IonLabel position="floating">Words</IonLabel>
            <IonInput type="text" {...register("words", {required: true})} />
            {errors.words && (
              <IonText color="danger">Words is required</IonText>
            )}
          </IonItem>
          <IonItem fill="solid">
            <IonLabel position="floating">Limit</IonLabel>
            <IonInput type="number" {...register("limit", {required: true})} />
            {errors.limit && (
              <IonText color="danger">Limit is required</IonText>
            )}
          </IonItem>
          <IonItem fill="solid">
            <IonLabel position="floating">Interval</IonLabel>
            <IonInput
              type="number"
              {...register("interval", {required: true})}
            />
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
      )}
    </IonCard>
  );
};

export default TrendsForm;
