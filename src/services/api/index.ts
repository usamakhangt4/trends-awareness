import axios from "axios";
import {useMutation} from "react-query";
import * as R from "ramda";
import {storage} from "../../storage";

export interface AxiosCallParamsType {
  headers?: any;
  method?: any;
  url: string;
  data?: any;
}

export const axiosCall = ({method = "get", url, data}: AxiosCallParamsType) => {
  return axios({
    headers: {
      "Content-Type": "application/json",
    },
    method,
    url: `${process.env.REACT_APP_MACHINE_IP}${url}`,
    data,
  });
};

export const useUserMutation = ({
  payload,
  accessToken,
  authTokenRequired,
  onSuccessActions,
}: {
  payload: any;
  accessToken?: string;
  authTokenRequired?: boolean;
  onSuccessActions?: Function;
}) => {
  return useMutation(
    // data is now an object instead of formData only.
    // new keys that can be added: url and isDynamicUrl.
    // if isDynamicUrl is true, url has to be provided.
    // use this in case of variable value in url.
    // modification made to remove useQuery depedency in case of sending data and dynamic url.
    (data: any) => {
      const isDynamicUrl = R.pathOr(false, ["isDynamicUrl"], data);

      return axiosCall({
        ...payload,
        url: isDynamicUrl ? data.url : payload.url,
        data: isDynamicUrl ? data.data : data,
        accessToken,
        authTokenRequired,
      });
    },

    {
      onMutate: () => {
        storage.set("isAppLoading", true);
        console.log("loading.....");
      },
      onSuccess: () => {
        if (onSuccessActions) {
          onSuccessActions();
        }
      },
      onSettled: (data) => {
        storage.set("isAppLoading", false);
        console.log("data loaded lol");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
