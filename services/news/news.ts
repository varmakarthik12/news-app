/**
 * Represents a news article.
 */
export interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

/**
 * Represents the response from the news API.
 */
export interface NewsResponse {
  status: "ok" | "error";
  totalResults: number;
  articles: Article[];
}

/**
 * Type for the parameters used in the news API requests.
 */
type NewsParams = Record<string, string>;

// API key for the news API
const API_KEY = process.env.NEWS_API_KEY ?? "";

// Base URL for the news API
const BASE_URL = "https://newsapi.org/v2";

/**
 * Fetches news data from the specified endpoint with optional parameters.
 * @param endpoint - The API endpoint to fetch data from.
 * @param params - Optional parameters for the API request.
 * @returns A promise that resolves to the news response.
 */
const fetchNews = async (
  endpoint: string,
  params?: NewsParams
): Promise<NewsResponse> => {
  const url = new URL(`${BASE_URL}/${endpoint}`);

  if (params) {
    url.search = new URLSearchParams({
      ...params,
    }).toString();
  }

  const headers = new Headers();
  headers.append("Authorization", API_KEY);

  const response = await fetch(url.toString(), {
    headers: headers,
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch top headlines, status: ${response.statusText}`
    );
  }

  return response.json();
};

/**
 * Fetches the top headlines from the news API.
 * @param params - Optional parameters for the API request.
 * @returns A promise that resolves to the news response.
 */
export const getTopHeadlines = async (params?: NewsParams) => {
  return await fetchNews("top-headlines", params);
};
