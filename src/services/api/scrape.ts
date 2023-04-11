import {useMutation, MutationFunction, useQuery} from "react-query";

type scrapeTweets = {
  since: string;
  until: string;
  words: string;
  limit: number;
  interval: number;
};

type scrapeResponse = {
  data: any;
};

const scrapeTweets: MutationFunction<scrapeResponse, scrapeTweets> = async (
  formData
) => {
  const response = await fetch("http://127.0.0.1:5000/tweet_scrape", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Scrapping failed");
  }
  return data;
};

export const useTweetsScraping = () => {
  const {
    mutate: mutateScraping,
    isLoading,
    isSuccess,
    isError,
  } = useMutation<scrapeResponse, Error, scrapeTweets>(scrapeTweets);

  const handleScraping = async (formData: scrapeTweets) => {
    try {
      const result = await mutateScraping(formData);
      return result;
    } catch (error) {
      console.log(error);

      throw error;
    }
  };

  return {handleScraping, isLoading, isSuccess, isError};
};
