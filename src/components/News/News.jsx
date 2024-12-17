import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function News() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");

  const filtredNews = news.filter((n) => n.title.toLowerCase().includes(query));

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=dogs&page=1&pageSize=10&apiKey=1ea4dd03b2b04b8ca95a7ec402bb9113"
    )
      .then((res) => res.json())
      .then((news) => setNews(news.articles));
  }, []);

  return (
    <>
      <input type="text" placeholder="filter" onChange={(evt) => setQuery(evt.target.value)} />
      <ul>
        {filtredNews.map((article, index) => {
          return (
            <li key={article.title}>
              <Link to={`article-${index}`}>{article.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
