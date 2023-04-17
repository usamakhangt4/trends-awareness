import {
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonText,
} from "@ionic/react";
import {SubmitHandler, useForm} from "react-hook-form";
import {eye, eyeOff} from "ionicons/icons";
import {useState} from "react";
import {useRegistration} from "../../services/api/auth";
import {storage} from "../../storage";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignupFormTypes {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupForm = (props: SignupFormTypes) => {
  const {setIsLoggedIn} = props;
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<Inputs>({mode: "all"});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {accountRegistration} = useRegistration();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    accountRegistration(data, {
      onSuccess: async () => {
        storage.set("isLoggedIn", true);
        setIsLoggedIn(true);
      },
    });
  };

  const password = watch("password");
  return (
    <>
      <IonList>
        <IonItem>
          <IonLabel position="floating">First Name</IonLabel>
          <IonInput type="text" {...register("firstName", {required: true})} />
          {errors.firstName && (
            <IonText color="danger">First name is required</IonText>
          )}
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Last Name</IonLabel>
          <IonInput type="text" {...register("lastName", {required: true})} />
          {errors.lastName && (
            <IonText color="danger">Last name is required</IonText>
          )}
        </IonItem>
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
        <IonItem>
          <IonLabel position="floating">Confirm Password</IonLabel>
          <IonInput
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword", {
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          <IonIcon
            icon={showConfirmPassword ? eyeOff : eye}
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            slot="end"
          />
          {errors.confirmPassword && (
            <IonText color="danger">{errors.confirmPassword.message}</IonText>
          )}
        </IonItem>
        <IonButton
          class="ion-margin-top"
          color={"secondary"}
          onClick={handleSubmit(onSubmit)}>
          Signup
        </IonButton>
      </IonList>
    </>
  );
};

export default SignupForm;
