import {useUserMutation} from ".";
import {endpoints} from "../../constants";

export const useTweetsScraping = () => {
  const payload = {
    url: endpoints.SCRAPE,
    method: "post",
  };

  const {mutate, isLoading} = useUserMutation({
    payload,
  });

  return {
    scrapeTweets: mutate,
    isLoading,
  };
};
