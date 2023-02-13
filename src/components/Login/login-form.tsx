import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
} from "@ionic/react";
import {eye, eyeOff} from "ionicons/icons";
import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {Storage} from "@ionic/storage";

interface Inputs {
  username: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>();

  const [showPassword, setShowPassword] = useState(false);
  const storage = new Storage();

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    console.log(data);
    storage.create();
    storage.set("isLoggedIn", "true");
    const temp = await storage.get("isLoggedIn");
    console.log(typeof temp);
  };

  return (
    <>
      <IonItem fill="solid">
        <IonLabel position="floating">Username</IonLabel>
        <IonInput type="text" {...register("username", {required: true})} />
        {errors.username && (
          <IonText color="danger">Username is required</IonText>
        )}
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
          })}
        />
        <IonIcon
          icon={showPassword ? eyeOff : eye}
          onClick={() => setShowPassword(!showPassword)}
          slot="end"
        />
        {errors.password?.type === "required" && (
          <IonText color="danger">Password is required</IonText>
        )}
        {errors.password?.type === "minLength" && (
          <IonText color="danger">
            Password must be at least 8 characters long
          </IonText>
        )}
      </IonItem>
      <IonButton
        class="ion-margin-top"
        color={"secondary"}
        onClick={handleSubmit(onSubmit)}>
        Login
      </IonButton>
    </>
  );
};

export default LoginForm;
