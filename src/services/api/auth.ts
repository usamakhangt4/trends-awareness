import {useUserMutation} from ".";
import {endpoints, queryConstants} from "../../constants";

export const useRegistration = () => {
  const payload = {
    url: endpoints.REGISTRATION,
    method: "post",
  };

  const {mutate, ...rest} = useUserMutation({
    payload,
  });

  return {
    accountRegistration: mutate,
    ...rest,
  };
};

export const useLogin = () => {
  const payload = {
    url: endpoints.LOGIN,
    method: "post",
  };

  const {mutate, ...rest} = useUserMutation({
    payload,
  });

  return {
    accountLogin: mutate,
    ...rest,
  };
};
