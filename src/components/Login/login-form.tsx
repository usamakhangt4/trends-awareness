import {
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
} from "@ionic/react";
import {eye, eyeOff} from "ionicons/icons";
import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {useLogin} from "../../services/api/auth";

interface Inputs {
  email: string;
  password: string;
}
interface LoginFormTypes {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = (props: LoginFormTypes) => {
  const {setIsLoggedIn} = props;
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>();

  const [showPassword, setShowPassword] = useState(false);

  const {accountLogin} = useLogin();

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    accountLogin(data, {
      onSuccess: () => {
        setIsLoggedIn(true);
      },
    });
  };

  return (
    <>
      <IonItem>
        <IonLabel position="floating">Email</IonLabel>
        <IonInput
          type="email"
          {...register("email", {
            required: true,
            pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
          })}
        />
        {errors.email?.type === "required" && (
          <IonText color="danger">Email is required</IonText>
        )}
        {errors.email?.type === "pattern" && (
          <IonText color="danger">Invalid email address</IonText>
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
