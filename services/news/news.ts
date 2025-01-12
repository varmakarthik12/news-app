export interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}
export interface NewsResponse {
  status: "ok" | "error";
  totalResults: number;
  articles: Article[];
}
type NewsParams = Record<string, string>;

const API_KEY = process.env.NEWS_API_KEY ?? "";
const BASE_URL = "https://newsapi.org/v2";

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

export const getTopHeadlines = async (params?: NewsParams) => {
  return await fetchNews("top-headlines", params);
};
