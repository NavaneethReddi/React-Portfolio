import { useEffect, useRef, useState } from "react";

// Define and export the Article type

export type Article = {

    title: string;
  
    link: string;
  
    source_id?: string;
  
    creator?: string[];
  
    pubDate?: string;
  
  };

export function useTechNewsApi() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiSuccess, setApiSuccess] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    setLoading(true);
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_8285393797cf9afbf2091309d53e2b7e03307&q=tech%20news&country=us&category=technology"
    )
      .then((res) => res.json())
      .then((data) => {
        const news = data.results || [];
        const success = Array.isArray(news) && news.length > 0;
        setArticles(success ? news : []);
        setApiSuccess(success);
        setLoading(false);
      })
      .catch(() => {
        setApiSuccess(false);
        setLoading(false);
      });
  }, []);

  return { articles, loading, apiSuccess };
}