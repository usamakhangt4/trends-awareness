import {useMutation, MutationFunction} from "react-query";

type RegistrationData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
type LoginData = {
  email: string;
  password: string;
};

type authResponse = {
  success: boolean;
  message: string;
};

const registerUser: MutationFunction<authResponse, RegistrationData> = async (
  formData
) => {
  const response = await fetch("http://127.0.0.1:5000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }
  return data;
};

export const useRegistration = () => {
  const {
    mutate: mutateRegistration,
    isLoading,
    isSuccess,
    isError,
  } = useMutation<authResponse, Error, RegistrationData>(registerUser);

  const handleRegistration = async (formData: RegistrationData) => {
    try {
      const result = await mutateRegistration(formData);
      return result;
    } catch (error) {
      console.log(error);

      throw error;
    }
  };

  return {handleRegistration, isLoading, isSuccess, isError};
};

const loginUser: MutationFunction<authResponse, LoginData> = async (
  formData
) => {
  const response = await fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }
  return data;
};

export const useLogin = () => {
  const {
    mutate: mutateLogin,
    isLoading,
    isSuccess,
    isError,
  } = useMutation<authResponse, Error, LoginData>(loginUser);

  const handleLogin = async (formData: LoginData) => {
    try {
      const result = await mutateLogin(formData);
      return result;
    } catch (error) {
      console.log(error);

      throw error;
    }
  };

  return {handleLogin, isLoading, isSuccess, isError};
};
