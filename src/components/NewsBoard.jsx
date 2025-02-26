import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); // Check if data is coming through
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setError("Failed to load articles.");
        }
      } catch (error) {
        setError("An error occurred while fetching articles.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="min-h-screen">
      <h2 className="text-center mt-8 text-2xl px-4 font-bold">
        Today's latest {category} news
      </h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="flex flex-wrap justify-center px-4">
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
